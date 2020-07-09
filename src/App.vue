<template>
	<div>
		<favicon :isNotified="favicon.isNotified" />
		<div class="body__background-placeholder" />
		<div class="master body__master" :class="{ 'master_max-width': !layout.isWide }">
			<div v-if="widgetbar.isVisible" class="master__widgetbar-placeholder">
				<widgetbar :class="paddingTopClass">
					<slot name="widgetbar">
						<dummy :length="2500" />
					</slot>
				</widgetbar>
			</div>
			<div class="master__sidebar-placeholder" :class="sidebarDirectionClass">
				<sidebar
					:isVertical="sidebar.isVertical"
					:notification="notification"
					:profile="profile"
					:menu="menu"
					:search="search"
				/>
			</div>
			<div class="master__main-app-placeholder" :class="{ 'margin-left': sidebar.isVertical }">
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
import Dummy from '@/components/global/Dummy/index.vue'
import Favicon from '@/components/local/Favicon/index.vue'
import Sidebar from '@/components/local/Sidebar/index.vue'
import Widgetbar from '@/components/local/Widgetbar/index.vue'
import MainApp from '@/components/local/MainApp/index.vue'
import { mapActions, mapState } from 'vuex'

export default {
	name: 'MasterApp',
	components: {
		Favicon,
		Sidebar,
		Widgetbar,
		MainApp,
		Dummy
	},
	async created(): Promise<void> {
		this.setIsWidgetbarVisible()
		this.init()
	},
	computed: {
		...mapState('master', [
			'layout',
			'favicon',
			'widgetbar',
			'sidebar',
			'notification',
			'profile',
			'menu',
			'search'
		]),
		sidebarDirectionClass(): string {
			return `master__sidebar-placeholder_${
				this.sidebar.isVertical ? 'vertical' : 'horizontal'
			}`
		},
		paddingTopClass(): string {
			return this.sidebar.isVertical
				? 'padding-top_base'
				: 'padding-top_sidebar'
		}
	},
	methods: {
		...mapActions('master', [
			'setLayoutProps',
			'setFaviconProps',
			'setWidgetbarProps',
			'setSidebarProps',
			'setNotificationProps',
			'setProfileProps',
			'setMenuProps',
			'setSearchProps',
			'getInitData'
		]),
		setIsWidgetbarVisible(): void {
			this.setWidgetbarProps({ isVisible: !!this.$slots.widgetbar })
		},

		async init(): Promise<void> {
			const { user, userSP } = await (this as any).$initData()
			let name = userSP.Title
			let avatar
			let avatarPosition

			if (user) {
				name = `${user.firstName} ${user.lastName}`
				avatar = user.avatar
				avatarPosition = user.avatarPosition
			}

			this.setProfileProps({
				name,
				avatar,
				avatarPosition
			})
		}
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
			background-size contain
			background-repeat no-repeat
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
