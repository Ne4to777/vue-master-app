<template>
	<div>
		<sidebar-icons />
		<div class="sidebar__background-placeholder"></div>
		<sidebar-collapser class="sidebar__collapser" />
		<sidebar-logo class="sidebar__logo" :class="{'sidebar__logo_shifted': sidebarCollapsed}" />
		<sidebar-notification class="sidebar__notification" />
		<sidebar-profile class="sidebar__profile" />
		<sidebar-menu class="sidebar__menu" />
		<sidebar-search class="sidebar__search" v-if="!sidebarCollapsed" />
		<sidebar-footer class="sidebar__footer" v-if="!sidebarCollapsed" />
	</div>
</template>

<script>
/* eslint max-len:0 */
import { mapGetters } from 'vuex'
import SidebarIcons from '@/components/local/Sidebar/components/SidebarIcons.vue'
import SidebarLogo from '@/components/local/Sidebar/components/SidebarLogo.vue'
import SidebarNotification from '@/components/local/Sidebar/components/SidebarNotification.vue'
import SidebarProfile from '@/components/local/Sidebar/components/SidebarProfile.vue'
import SidebarMenu from '@/components/local/Sidebar/components/SidebarMenu.vue'
import SidebarSearch from '@/components/local/Sidebar/components/SidebarSearch.vue'
import SidebarFooter from '@/components/local/Sidebar/components/SidebarFooter.vue'
import SidebarCollapser from '@/components/local/Sidebar/components/SidebarCollapser.vue'

export default {
	name: 'Sidebar',
	components: {
		SidebarIcons,
		SidebarMenu,
		SidebarCollapser,
		SidebarProfile,
		SidebarNotification,
		SidebarLogo,
		SidebarSearch,
		SidebarFooter
	},
	data() {
		return {}
	},
	methods: {},
	computed: {
		...mapGetters({
			sidebarCollapsed: 'master/sidebarCollapsed',
			sidebarPlaceholderCollapsed: 'master/sidebarPlaceholderCollapsed'
		})
	}
}
</script>

<style lang="stylus" scoped>
@import './../../../assets/stylus/variables.styl'

.sidebar
	position relative

	&__collapser
		position absolute
		right -15px
		top 40vh

	&__background-placeholder
		position absolute
		top 0
		left 0
		right 0
		height 100vh
		background-repeat no-repeat
		background-position left bottom
		z-index 0

	&__logo
		position relative
		margin-left $margin_base
		z-index 1

		&_shifted
			margin-left $margin_smaller

	&__notification
		position absolute
		top $margin_base
		right $margin_small
		z-index 1

	&__profile
		position relative
		margin-top $margin_small
		display block
		background-color $lightblack
		padding 12px $padding_base
		box-sizing border-box
		color inherit
		z-index 1

	&__menu
		position relative
		margin $margin_smaller 0
		z-index 1

	&__search
		position relative
		padding 0 $margin_base
		z-index 1

	&__footer
		position absolute
		bottom $margin_base
		margin 0 $margin_base
		z-index 1
		font-size $font-size_small

.debug
	background-color $lightgrey

	&:after
		content 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'

	& > *
		background-color $white
</style>
