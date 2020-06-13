<template>
	<div
		class="sidebar"
		@mouseenter="setMouseOverSidebarDelayed(true)"
		@mouseleave="setMouseOverSidebarDelayed(false)"
	>
		<sidebar-icons />
		<div class="sidebar__background-placeholder"></div>
		<sidebar-collapser
			v-if="isMouseOver"
			class="sidebar__collapser"
			v-model="syncedIsCollapsed"
		/>
		<sidebar-logo class="sidebar__logo" />
		<sidebar-notification
			class="sidebar__notification"
			:count="notification.count"
		/>
		<sidebar-profile
			class="sidebar__profile"
			:avatarUrl="profile.avatar.url"
			:avatarPosition="profile.avatar.position"
			:name="profile.name"
		/>
		<sidebar-menu
			class="sidebar__menu"
			:tree="menu.tree"
			:isTitlesVisible="menu.isTitlesVisible"
			:isIconsVisible="menu.isIconsVisible"
			:delay="menu.delay"
		/>
		<sidebar-search class="sidebar__search" :url="search.url" />
		<sidebar-footer class="sidebar__footer" />
	</div>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator'
import SidebarIcons from '@/components/local/Sidebar/components/Icons/index.vue'
import SidebarLogo from '@/components/local/Sidebar/components/Logo/index.vue'
import SidebarNotification from '@/components/local/Sidebar/components/Notification/index.vue'
import SidebarProfile from '@/components/local/Sidebar/components/Profile/index.vue'
import SidebarMenu from '@/components/local/Sidebar/components/Menu/index.vue'
import SidebarSearch from '@/components/local/Sidebar/components/Search/index.vue'
import SidebarFooter from '@/components/local/Sidebar/components/Footer/index.vue'
import SidebarCollapser from '@/components/local/Sidebar/components/Collapser/index.vue'

import { switchValueDelayed } from '@/utility/runtime'

const setMouseOverSidebarDelayed = switchValueDelayed('isMouseOver', 'collapser.timeoutLabel', 'collapser.delay')

const COUNT = 100

const PROFILE = {
	avatar: {
		url: require('@/components/local/Sidebar/components/Profile/avatar.png'),
		position: ''
	},
	name: 'Алексеев Алексей Сергеевич'
}

const TREE = {
	title: 'root',
	url: '/?a=1',

	nodes: [
		{
			title: 'title1',
			icon: '#icon-bulb',
			isActive: true,
			onClick: () => console.log('click'),
			nodes: []
		},
		{
			title: 'title2',
			icon: '#icon-globe',
			url: '/?a=3',
			nodes: [
				{
					title: 'title21',
					icon: '#icon-info',
					url: '/?a=4'
				}
			]
		},
		{
			title: 'title3',
			icon: '#icon-sheet',
			url: '/?a=5',
			nodes: [
				{
					title: 'title31',
					icon: '#icon-wrench',
					url: '/?a=6',
					nodes: [
						{
							title: 'title311',
							icon: '#icon-bell',
							onClick: () => console.log('click'),
							nodes: []
						},
						{
							title: 'title312',
							icon: '#icon-discussion',
							url: '/?a=8',
							isActive: true,
							nodes: []
						}
					]
				},
				{
					title: 'title311',
					icon: '#icon-bell',
					onClick: () => console.log('click'),
					nodes: []
				},
				{
					title: 'title312',
					icon: '#icon-discussion',
					url: '/?a=8',
					isActive: true,
					nodes: []
				}
			]
		}
	]
}
@Component({
	components: {
		SidebarIcons,
		SidebarMenu,
		SidebarCollapser,
		SidebarProfile,
		SidebarNotification,
		SidebarLogo,
		SidebarSearch,
		SidebarFooter
	}
})
export default class Sidebar extends Vue {
	@PropSync('isCollapsed', { type: Boolean }) syncedIsCollapsed!: boolean

	private readonly isMouseOver = false

	private readonly timeoutCollapserLabel!: number

	private readonly collapser = { timeoutLabel: 0, delay: 100 }

	private readonly notification = { count: COUNT }

	private readonly profile = PROFILE

	private readonly menu = {
		tree: TREE,
		isTitlesVisible: true,
		isIconsVisible: true,
		delay: 100
	}

	private readonly search = { url: '/test' }

	private setMouseOverSidebarDelayed(value: boolean): void {
		setMouseOverSidebarDelayed.call(this, value)
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/paths.styl'
@import '~@/assets/styles/variables.styl'

.sidebar
	padding $padding_small 0
	box-sizing border-box
	background $color-grey_darkest
	background linear-gradient(to top, $color-grey_darkest, $color-grey_darker)
	border-radius $border-radius_base $border-radius_base 0 0
	box-shadow $shadow_light
	color $color-grey_dark

	&__background-placeholder
		background-image $sidebar-background

	&__logo
		display block
		height 28px
		width 48%
		position relative
		margin-left $margin_base
		z-index 1

		&_trimmed
			margin-left $margin_smaller

	&__notification
		position absolute
		top $margin_base
		right $margin_small
		z-index 1

	&__profile
		position relative
		display block
		margin-top $margin_small
		z-index 1

	&__menu
		position relative
		margin ($margin_small / 2) 0 ($margin_small / 2) 0

	&__search
		position relative
		padding 0 $margin_base
		z-index 1

	&__footer
		position absolute
		bottom $margin_base
		margin 0 $margin_base
		z-index 1

	&__collapser
		position absolute
		right -15px
		top 40vh
		width 15px
		height 80px
</style>
