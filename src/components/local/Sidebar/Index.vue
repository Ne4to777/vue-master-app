<template>
	<div class="sidebar" :style="{width:sidebarWidthCSS}">
		<div class="background-placeholder master-sidebar__background-placeholder"></div>
		<div class="collapser s-icon" :class="arrowClass" v-if="isCollapserVisible" @click="toggle"></div>
		<a href="/" class="logo master-sidebar__logo" :class="{'logo_shifted':sidebarCollapsed}"></a>
		<div class="notification master-sidebar__notification_active">
			<div class="notification__count">9+</div>
		</div>
		<a href="/" class="profile">
			<div class="profile__avatar" :style="{'background-image':`url('${USER.avatar}')`}"></div>
			<div class="profile__info" v-if="!sidebarCollapsed">Алексеева Анастасия</div>
			<div style="clear:both"></div>
		</a>
		<sidebar-menu class="menu" />
	</div>
</template>

<script>
/* eslint {object-shorthand:0} */
import { mapGetters, mapActions } from 'vuex'
import SidebarMenu from '@/components/local/Sidebar/SidebarMenu.vue'

export default {
	name: 'Sidebar',
	mounted() {
		console.log(this.USER)
	},
	components: { SidebarMenu },
	data() {
		return {
			toggledByCollapser: false
		}
	},
	methods: {
		toggle() {
			console.log('click')
			this.setSidebarCollapsed(!this.sidebarCollapsed)
		},
		...mapActions({
			setSidebarCollapsed: 'master/setSidebarCollapsed'
		})
	},
	computed: {
		arrowClass() {
			return `s-icon-arrow-${this.sidebarCollapsed ? 'right' : 'left'}`
		},
		isCollapserVisible() {
			return this.sidebarCollapsed || this.sidebarPlaceholderCollapsed
		},
		...mapGetters({
			sidebarWidthCSS: 'master/sidebarWidthCSS',
			sidebarCollapsed: 'master/sidebarCollapsed',
			sidebarPlaceholderCollapsed: 'master/sidebarPlaceholderCollapsed',
			HOST_REGISTRY: 'master/HOST_REGISTRY',
			USER: 'master/USER'
		})
	}
}
</script>

<style lang="stylus" scoped>
@import './../../../assets/stylus/variables.styl'

.sidebar
	padding $padding_small 0
	box-sizing border-box
	background $deepblue
	background linear-gradient(to top, $blackblue, $deepblue)
	border-radius $border-radius_base $border-radius_base 0 0
	box-shadow 0px 10px 20px -5px #000000
	color $grey

.collapser
	position absolute
	right -15px
	top 40%
	width 15px
	height 80px
	border-radius 0 $border-radius_base $border-radius_base 0
	text-align center
	line-height 80px
	font-size 10px
	color #FFFFFF
	background-color #4D4F51
	cursor pointer

.background-placeholder
	position absolute
	top 0
	left 0
	right 0
	height 100vh
	background-repeat no-repeat
	background-position left bottom
	z-index 0

.logo
	display block
	height 28px
	width 44%
	margin-left $margin_base
	// background-color $green
	background-size auto 100%
	background-repeat no-repeat

	&_shifted
		margin-left $margin_smaller

.notification
	position absolute
	top $margin_base
	right $margin_small
	width 20px
	height 20px
	background-size contain

	&__count
		background-color $lightblue
		position absolute
		font-size $font-size_small
		line-height $line-height_larger
		text-align center
		user-select none
		color $white
		width 20px
		height 20px
		top -10px
		right -10px
		border-radius $border-radius_largest
		border-width $border-width_base
		border-color $deepblue
		border-style solid
		cursor pointer

.profile
	display block
	margin-top $margin_small
	background-color $lightblack
	padding 12px $padding_base
	box-sizing border-box
	color inherit

	&__avatar
		display inline-block
		background-color $white
		height 48px
		width 48px
		border-radius $border-radius_largest
		border-width $border-width_base
		border-color $darkgrey
		border-style solid
		box-sizing border-box
		vertical-align middle
		// background-image url('http://intranet.dme.aero.corp/Photo1/photo.aspx?TabelNumber=0000482')
		background-size cover
		background-position center center

	&__info
		display inline-block
		max-width 63%
		margin-left 15px
		line-height $line-height_small
		vertical-align middle

	&:hover
		cursor pointer

.menu
	margin $margin_smaller 0

.debug
	background-color $lightgrey

	&:after
		content 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'

	& > *
		background-color $white
</style>
