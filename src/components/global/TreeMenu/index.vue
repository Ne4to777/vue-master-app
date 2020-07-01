<template>
	<div v-if="tree.title || tree.icon" :class="css.tree" v-on="mouseHandler()">
		<component
			v-if="this.depth || this.isRootVisible"
			:is="tree.url ? 'a' : 'div'"
			:class="{ [css.content]: this.depth, [css.nodeRoot]: !this.depth }"
			:href="tree.url"
			@click="clickHandler"
		>
			<svg-ref
				v-if="isIconVisible"
				:class="css.icon"
				:viewBox="tree.iconViewBox"
				:ref-id="tree.icon"
			/>
			<div v-if="tree.title && isTitleVisible" :class="css.title">
				{{ tree.title }}
			</div>
			<div :class="css.arrow" v-if="isArrowVisible"></div>
		</component>

		<div
			:class="[
				css.nodes,
				`${css.nodes}_${this.depth}`,
				{ [css.nodesRoot]: !(this.depth || this.isRootVisible) }
			]"
			v-if="isChildrenVisible"
		>
			<tree-menu
				:class="[css.node, { [css.nodeActive]: node.isActive }]"
				v-for="(node, i) in tree.nodes"
				:classNamespace="classNamespace"
				:tree="node"
				:key="i"
				:depth="depth + 1"
				:delay="delay"
				:styles="styles"
				:isIconVisible="isIconVisible"
				:isTitleVisible="isTitleVisible"
			/>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { joinBySpace } from '@/utility/array'
import { switchValueDelayed } from '@/utility/runtime'
import { TreeI, StylesI } from '@/components/global/TreeMenu/types'
import SvgRef from '@/components/global/SvgRef/index.vue'

const setChildrenVisibilityDelayed = switchValueDelayed('isChildrenNeedToShow', 'timeoutLabel', 'delay')

// const generateClassName =

@Component({
	name: 'TreeMenu',
	components: {
		SvgRef
	}
})
export default class TreeMenu extends Vue {
	@Prop({ type: String, default: '' }) readonly classNamespace!: string

	@Prop({ type: Object, default: () => ({}) }) readonly tree!: TreeI

	@Prop({ type: Number, default: 0 }) readonly depth!: number

	@Prop({ type: Number, default: 0 }) readonly delay!: number

	@Prop({ type: Object, default: () => ({}) }) readonly styles!: StylesI

	@Prop({ type: Boolean, default: true }) readonly isIconVisible!: boolean

	@Prop({ type: Boolean, default: true }) readonly isTitleVisible!: boolean

	@Prop({ type: Boolean, required: false }) readonly isRootVisible!: boolean

	@Prop({ type: Boolean, required: false }) readonly isRootArrowVisible!: boolean

	get css(): object {
		return {
			tree: this.generateClassName(['tree', this.styles.tree]),
			nodes: this.generateClassName(['tree__nodes', this.styles.nodes]),
			nodesRoot: this.generateClassName(['tree__nodes_root', this.styles.nodesRoot]),
			node: this.generateClassName(['tree__node', this.styles.node]),
			nodeRoot: this.generateClassName(['tree__node_root', this.styles.nodeRoot]),
			content: this.generateClassName(['tree__content', this.styles.content]),
			title: this.generateClassName(['tree__title', this.styles.title]),
			nodeActive: this.generateClassName(['tree__node_active', this.styles.active]),
			arrow: this.generateClassName(['tree__arrow', this.styles.arrow]),
			icon: this.generateClassName(['tree__icon', this.styles.icon])
		}
	}

	private readonly isChildrenNeedToShow = false

	private readonly timeoutLabel = 0

	generateClassName(names: string[]): string {
		return `${this.classNamespace}-${joinBySpace(names)}`
	}

	mouseHandler(): object {
		const {
			tree, depth, isRootVisible, isChildrenNeedToShow
		} = this
		const result: Record<string, Function> = {}
		const handler = setChildrenVisibilityDelayed.bind(this)
		if (tree.isChildrenShownByClick) {
			result.mouseup = () => handler(!isChildrenNeedToShow)
		} else if (depth || isRootVisible) {
			result.mouseenter = () => handler(true)
			result.mouseleave = () => handler(false)
		}

		return result
	}

	private clickHandler(e: MouseEvent): void {
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

	get isArrowVisible(): boolean {
		let result = false
		const {
			hasChildren,
			isRootArrowVisible,
			depth
		} = this

		if (depth) {
			if (hasChildren) {
				result = true
			}
		} else if (isRootArrowVisible) {
			result = true
		}
		return result
	}

	get isChildrenVisible(): boolean {
		let result = false
		const {
			hasChildren,
			isRootVisible,
			depth,
			isChildrenNeedToShow
		} = this

		if (hasChildren) {
			if (isRootVisible) {
				if (isChildrenNeedToShow) {
					result = true
				}
			} else if (depth) {
				if (isChildrenNeedToShow) {
					result = true
				}
			} else {
				result = true
			}
		}

		return result
	}
}
</script>
