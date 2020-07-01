<template>
	<div>
		<favicon :isNotified="favicon.isNotified" />
		<div class="body__background-placeholder" />
		<div
			class="master body__master"
			:class="{ 'master_max-width': !isLayoutWide }"
		>
			<div v-if="isWidgetbarVisible" class="master__widgetbar-placeholder">
				<widgetbar :class="paddingTopClass">
					<slot name="widgetbar">
						<dummy :length="2500" />
					</slot>
				</widgetbar>
			</div>
			<div class="master__sidebar-placeholder" :class="sidebarDirectionClass">
				<sidebar
					:isVertical="sidebar.isVertical"
					:notification="sidebar.notification"
					:profile="sidebar.profile"
					:menu="sidebar.menu"
					:search="sidebar.search"
				/>
			</div>
			<div
				class="master__main-app-placeholder"
				:class="{ 'margin-left': sidebar.isVertical }"
			>
				<main-app :class="paddingTopClass">
					<slot>
						<dummy :length="11500" />
					</slot>
				</main-app>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Dummy from '@/components/global/Dummy/index.vue'
import Favicon from '@/components/local/Favicon/index.vue'
import Sidebar from '@/components/local/Sidebar/index.vue'
import Widgetbar from '@/components/local/Widgetbar/index.vue'
import MainApp from '@/components/local/MainApp/index.vue'

const FAVICON = {
	isNotified: false
}

const NOTIFICATION = {
	items: [
		{
			author: 'author',
			type: 'post',
			text: 'some text'
		}
	]
}

const PROFILE = {
	avatar: {
		url: require('@/components/local/Sidebar/components/Profile/avatar.png'),
		position: ''
	},
	name: 'Алексеев Алексей Сергеевич'
}

const SEARCH = { url: '/test' }

const TREE = {
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

Component.registerHooks(['created', 'beforeUpdate'])

@Component({
	name: 'MasterApp',
	components: {
		Favicon,
		Sidebar,
		Widgetbar,
		MainApp,
		Dummy
	}
})

export default class MasterApp extends Vue {
	private readonly isLayoutWide = false

	private readonly isSidebarVertical = false

	private readonly favicon = FAVICON

	private isWidgetbarVisible = true


	// created(): void {
	// 	this.setIsWidgetbarVisible()
	// }

	// beforeUpdate(): void {
	// 	this.setIsWidgetbarVisible()
	// }

	private get sidebar(): any {
		return {
			isVertical: this.isSidebarVertical,
			notification: NOTIFICATION,
			profile: PROFILE,
			search: SEARCH,
			menu: {
				tree: TREE,
				isTitlesVisible: true,
				isRootVisible: !this.isSidebarVertical,
				isRootArrowVisible: false,
				isIconsVisible: true,
				delay: 100
			}
		}
	}

	private get sidebarDirectionClass(): string {
		return `master__sidebar-placeholder_${this.sidebar.isVertical ? 'vertical' : 'horizontal'}`
	}

	private get paddingTopClass(): string {
		return this.sidebar.isVertical ? 'padding-top_base' : 'padding-top_sidebar'
	}

	private setIsWidgetbarVisible(): void {
		this.isWidgetbarVisible = !!this.$slots.widgetbar
	}
}
</script>

<style lang="stylus">
@import '~@/assets/styles/variables.styl'

.master_max-width
	max-width 1150px

.padding-top_sidebar
	padding-top $padding_base + 38px

.padding-top_base
	padding-top $padding_base

.margin-left
	margin-left 232px

.master
	&__sidebar
		&-placeholder
			position fixed

			&_vertical
				width 212px
				min-height 458px
				top $margin_base
				bottom 0
				float left

			&_horizontal
				width 100%
				top 0
				left 0

	&__main-app
		&-placeholder
			float none
			overflow hidden

	&__widgetbar
		padding-top $padding_base

		&-placeholder
			width 256px
			float right
			padding-left $padding_base
			height 1px
</style>
