<template>
	<div
		v-if="tree.title"
		:class="css.tree"
		@mouseenter="setMouseOverTreeDelayed(true)"
		@mouseleave="setMouseOverTreeDelayed(false)"
	>
		<component
			v-if="depth"
			:is="tree.url ? 'a' : 'div'"
			:class="css.content"
			:href="tree.url"
			@click="clickHandler($event)"
		>
			<svg :class="css.icon">
				<use :xlink:href="tree.icon" />
			</svg>
			<div :class="css.title">{{ tree.title }}</div>
			<div :class="css.arrow" v-if="hasChildren"></div>
		</component>

		<div :class="{ [css.nodes]: depth }" v-if="isChildrenVisible">
			<tree-menu
				:class="[css.node, { [css.active]: node.isActive }]"
				v-for="(node, i) in tree.nodes"
				:tree="node"
				:key="i"
				:depth="depth + 1"
				:delay="delay"
				:styles="styles"
			/>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { joinBySpace } from '@/utility/array'

interface ITree {
	tree: object
	nodes: Array<object>
	isActive?: boolean
	onClick: (e: MouseEvent) => void
	icon: string
}

interface IStyles {
	tree: string
	nodes: string
	node: string
	content: string
	title: string
	active: string
	arrow: string
	icon: string
}

@Component
export default class TreeMenu extends Vue {
	@Prop(Object) readonly tree!: ITree

	@Prop(Number) readonly depth!: number

	@Prop({ type: Number, default: 0 }) readonly delay!: number

	@Prop({ type: Object, default: () => ({}) }) readonly styles!: IStyles

	readonly css: object = {
		tree: joinBySpace(['tree', this.styles.tree]),
		nodes: joinBySpace(['tree__nodes', this.styles.nodes]),
		node: joinBySpace(['tree__node', this.styles.node]),
		content: joinBySpace(['tree__content', this.styles.content]),
		title: joinBySpace(['tree__title', this.styles.title]),
		active: joinBySpace(['tree__node_active', this.styles.active]),
		arrow: joinBySpace(['tree__arrow', this.styles.arrow]),
		icon: joinBySpace(['tree__icon', this.styles.icon])
	}

	private isMouseOverTree = false

	private timeoutLabel = 0

	setMouseOverTreeDelayed(value: boolean): void {
		if (value) {
			clearTimeout(this.timeoutLabel)
			this.isMouseOverTree = true
		} else {
			this.timeoutLabel = setTimeout(() => {
				this.isMouseOverTree = false
			}, this.delay)
		}
	}

	clickHandler(e: MouseEvent): void {
		const { tree } = this
		e.stopPropagation()
		if (tree.onClick) {
			e.preventDefault()
			tree.onClick(e)
		}
	}

	get hasChildren(): boolean {
		return !!this.tree?.nodes?.length
	}

	get isChildrenVisible(): boolean {
		return !!((this.isMouseOverTree && this.hasChildren) || !this.depth)
	}
}
</script>

<style lang="stylus"></style>
