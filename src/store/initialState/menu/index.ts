const tree = {
	icon: 'icon-menu',
	isChildrenShownByClick: true,
	nodes: [
		{
			title: 'title1',
			icon: 'icon-bulb',
			onClick: () => console.log('click'),
			nodes: []
		},
		{
			title: 'title2',
			icon: 'icon-globe',
			url: '/?a=3',
			nodes: [
				{
					title: 'title21',
					icon: 'icon-info',
					url: '/?a=4'
				}
			]
		},
		{
			title: 'title3',
			icon: 'icon-sheet',
			url: '/?a=5',
			nodes: [
				{
					title: 'title31',
					icon: 'icon-wrench',
					url: '/?a=6',
					nodes: [
						{
							title: 'title311',
							icon: 'icon-bell',
							onClick: () => console.log('click'),
							nodes: []
						},
						{
							title: 'title312',
							icon: 'icon-discussion',
							url: '/?a=8',
							isActive: true,
							nodes: []
						}
					]
				},
				{
					title: 'title311',
					icon: 'icon-bell',
					iconViewBox: '0 0 20 20',
					onClick: () => console.log('click'),
					nodes: []
				},
				{
					title: 'title312',
					icon: 'icon-discussion',
					url: '/?a=8',
					isActive: true,
					nodes: []
				}
			]
		}
	]
}

export default {
	tree,
	classNamespace: 'sidebar',
	isTitlesVisible: true,
	isRootVisible: false,
	isRootArrowVisible: false,
	isIconsVisible: true,
	delay: 100
}