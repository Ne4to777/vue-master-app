export interface TreeI {
	tree: object
	nodes: Array<object>
	isActive?: boolean
	onClick: (e: MouseEvent) => void
	icon: string
	iconViewBox?: string
	isChildrenShownByClick?: boolean
}

export interface StylesI {
	tree: string
	nodes: string
	nodesRoot: string
	node: string
	nodeRoot: string
	content: string
	title: string
	active: string
	arrow: string
	icon: string
	iconViewBox: string
}
