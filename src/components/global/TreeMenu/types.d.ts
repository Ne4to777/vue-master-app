export interface TreeI {
	tree: object
	nodes: Array<object>
	isActive?: boolean
	onClick: (e: MouseEvent) => void
	icon: string
}

export interface StylesI {
	tree: string
	nodes: string
	node: string
	content: string
	title: string
	active: string
	arrow: string
	icon: string
}