<template>
	<div :class="current.css.tree" v-if="depth===0">
		<tree-menu
			:class="current.css.node"
			v-for="node,i in tree.nodes"
			:tree="node"
			:key="i"
			:depth="depth+1"
		></tree-menu>
	</div>
	<div
		v-else-if="tree.title"
		:class="current.css.tree"
		@mouseenter="setTreeMouseOver(true)"
		@mouseleave="setTreeMouseOver(false)"
	>
		<component
			:is="tree.url ? 'a' : 'div'"
			:class="current.css.content"
			:href="tree.url"
			@click="clickHandler($event)"
		>{{ tree.title}}</component>

		<div :class="current.css.nodes" v-if="isChildrenVisible">
			<tree-menu
				:class="current.css.node"
				v-for="node,i in tree.nodes"
				:tree="node"
				:key="i"
				:depth="depth+1"
			></tree-menu>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

interface ITree {
	tree: object
	nodes: Array<object>
	onClick: (e: MouseEvent) => void
}

@Component
export default class TreeMenu extends Vue {
	@Prop(Object) readonly tree!: ITree

	@Prop(Number) readonly depth!: number

	current = {
		isMouseOverTree: false,
		css: {
			tree: 'tree',
			nodes: 'tree__nodes',
			node: 'tree__node',
			content: 'tree__content'
		}
	}

	setTreeMouseOver(value: boolean): void {
		this.$set(this.current, 'isMouseOverTree', value)
	}

	clickHandler(e: MouseEvent): void {
		e.stopPropagation()
		if (this.tree.onClick) {
			e.preventDefault()
			this.tree.onClick(e)
		}
	}

	get isChildrenVisible(): boolean {
		return !!(this.current.isMouseOverTree && this.tree?.nodes?.length)
	}
}
</script>

<style lang="stylus"></style>
