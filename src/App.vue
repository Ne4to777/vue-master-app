<template>
	<div>
		<div id="body-top"></div>
		<icons />
		<errors-notifier />
		<div class="body__background-placeholder"></div>
		<div class="master" :style="{'max-width':widthCSS}" :class="isWidgetsSlotEmpty" ref="master">
			<div class="master__widgets-placeholder" v-if="isWidgetsSlotEmpty">
				<widgets ref="widgets" class="master__widgets">
					<slot name="widgets"></slot>
				</widgets>
			</div>
			<div class="master__sidebar-placeholder" :style="{width:sidebarPlaceholderWidthCSS}">
				<sidebar class="master__sidebar" :style="{width:sidebarWidthCSS}" />
			</div>
			<div class="master__main-placeholder debug" ref="main">
				<slot>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</slot>
			</div>
		</div>
		<to-top-scroller class="to-top-scroller" />
	</div>
</template>

<script>
/* eslint max-len:0 */
import Icons from '@/components/global/Icons.vue'
import Sidebar from '@/components/local/Sidebar/Index.vue'
import Widgets from '@/components/local/Widgets.vue'
import ToTopScroller from '@/components/local/ToTopScroller.vue'
import ErrorsNotifier from '@/components/local/ErrorsNotifier.vue'
import { mapMasterActions, mapMasterGetters } from '@/storage/utility'

export default {
	name: 'MasterApp',
	components: {
		Sidebar,
		Widgets,
		ToTopScroller,
		ErrorsNotifier,
		Icons
	},
	created() {
		this.initMasterData({ localStorageOff: this.localStorageOff })
	},
	mounted() {
		window.addEventListener('resize', this.onResize)
		if (this.isSidebarCollapsed || this.needToCollapse()) {
			this.sidebarCollapse(true)
		}
		this.setWidgetsFloat(this.isWidgetsFloat)
		if (this.localStorageOff) this.LOCAL_STORAGE.clear()
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize)
	},
	props: {
		width: {
			type: String,
			default: 'base'
		},
		isSidebarCollapsed: {
			type: Boolean,
			default: false
		},
		isWidgetsFloat: {
			type: Boolean,
			default: true
		},
		localStorageOff: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {}
	},
	methods: {
		onResize() {
			if (this.needToCollapse()) {
				if (!this.sidebarCollapsed) {
					this.sidebarCollapse(true)
				}
			} else if (this.sidebarCollapsed) {
				this.sidebarCollapse(false)
			}
		},
		sidebarCollapse(collapsed) {
			this.setSidebarPlaceholderCollapsed(collapsed)
			this.setSidebarCollapsed(collapsed)
		},
		needToCollapse() {
			return (
				window.innerWidth <
				this.CONSTANTS.sidebar.width.base +
					this.CONSTANTS.widgets.width.base +
					this.CONSTANTS.master.collapseSidebarWidth
			)
		},
		...mapMasterActions([
			'initMasterData',
			'setSidebarCollapsed',
			'setSidebarPlaceholderCollapsed',
			'setWidgetsFloat',
			'updateMasterVersion',
			'updateUsersVersion'
		])
	},
	computed: {
		widthCSS() {
			const width = this.CONSTANTS.master.width[this.width]
			return width ? `${width}px` : 'none'
		},
		isWidgetsSlotEmpty() {
			return !this.$slots.widgets
		},

		...mapMasterGetters([
			'CONSTANTS',
			'sidebarWidthCSS',
			'sidebarPlaceholderWidthCSS',
			'sidebarCollapsed',
			'widgetsFloat',
			'LIST_REGISTRY',
			'HOST_REGISTRY',
			'LOCAL_STORAGE'
		])
	}
}
</script>

<style lang="stylus">
@import './assets/stylus/fonts.styl'
@import './assets/stylus/icons.styl'
@import './assets/stylus/variables.styl'

.fade-enter-active, .fade-leave-active
	transition opacity 0.5s

.fade-enter, .fade-leave-to
	opacity 0

body
	text-align justify

a
	&:focus
		outline none

.debug
	background-color $lightgreen

	& *
		background-color $grey

.master
	position relative
	margin $margin_base auto
	min-height 101vh

	&__sidebar
		position fixed
		top $margin_base
		bottom 0
		padding $padding_small 0
		box-sizing border-box
		background $blackblue
		background linear-gradient(to top, $blackblue, $deepblue)
		border-radius $border-radius_base $border-radius_base 0 0
		box-shadow 0px 10px 20px -5px #000
		color $darkgrey

		&-placeholder
			float left
			padding-right $padding_base
			height 1px

	&__main-placeholder
		float none
		overflow hidden

	&__widgets
		text-align justify
		margin-bottom $margin_base

		&-placeholder
			float right
			padding-left $padding_base
			height 1px

.to-top-scroller
	position fixed
	right 0
	top 0
	bottom 0

.body__background-placeholder
	position fixed
	top 0
	left 0
	right 0
	height 100vh
	background-repeat no-repeat
	background-size 100% 100%
	z-index 0
</style>
