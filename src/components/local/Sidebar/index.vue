<template>
	<div class="sidebar">
		<sidebar-icons />
		<div class="sidebar__background-placeholder"></div>
		<sidebar-collapser class="sidebar__collapser" />
		<sidebar-logo class="sidebar__logo" />
		<sidebar-notification class="sidebar__notification" />
		<sidebar-profile class="sidebar__profile" />
		<sidebar-menu class="sidebar__menu" />
		<sidebar-search class="sidebar__search" />
		<sidebar-footer class="sidebar__footer" />
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import SidebarIcons from '@/components/local/Sidebar/components/Icons/index.vue'
import SidebarLogo from '@/components/local/Sidebar/components/Logo/index.vue'
import SidebarNotification from '@/components/local/Sidebar/components/Notification/index.vue'
import SidebarProfile from '@/components/local/Sidebar/components/Profile/index.vue'
import SidebarMenu from '@/components/local/Sidebar/components/Menu/index.vue'
import SidebarSearch from '@/components/local/Sidebar/components/Search/index.vue'
import SidebarFooter from '@/components/local/Sidebar/components/Footer/index.vue'
import SidebarCollapser from '@/components/local/Sidebar/components/Collapser/index.vue'

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
export default class Sidebar extends Vue {}
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
