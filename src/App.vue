<template>
	<div>
		<div class="body__background-placeholder"></div>
		<div class="master" :style="{'max-width':widthCSS}" :class="isWidgetsSlotEmpty" ref="test">
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
		<notifications class="master__errors-notifier" group="foo" :closeOnClick="true" />
	</div>
</template>

<script>
/* eslint max-len:0 */
import { mapGetters, mapActions } from 'vuex'
import Sidebar from '@/components/local/Sidebar/Index.vue'
import Widgets from '@/components/local/Widgets.vue'

export default {
	name: 'MasterApp',
	components: {
		Sidebar,
		Widgets
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

		setTimeout(() => {
			this.pushError({ a: 'oh no' })
		}, 1000)
		setTimeout(() => {
			this.pushError({ a: 'oh my god' })
		}, 2000)
		setTimeout(() => {
			this.pushError({ a: 'oh fuck' })
		}, 3000)
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
			default: false
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
		...mapActions({
			initMasterData: 'master/initMasterData',
			setSidebarCollapsed: 'master/setSidebarCollapsed',
			setSidebarPlaceholderCollapsed: 'master/setSidebarPlaceholderCollapsed',
			setWidgetsFloat: 'master/setWidgetsFloat',
			updateMasterVersion: 'master/updateMasterVersion',
			updateUsersVersion: 'master/updateUsersVersion',
			pushError: 'master/pushError'
		})
	},
	computed: {
		widthCSS() {
			const width = this.CONSTANTS.master.width[this.width]
			return width ? `${width}px` : 'none'
		},
		isWidgetsSlotEmpty() {
			return !this.$slots.widgets
		},
		...mapGetters({
			CONSTANTS: 'master/CONSTANTS',
			sidebarWidthCSS: 'master/sidebarWidthCSS',
			sidebarPlaceholderWidthCSS: 'master/sidebarPlaceholderWidthCSS',
			sidebarCollapsed: 'master/sidebarCollapsed',
			widgetsFloat: 'master/widgetsFloat',
			LIST_REGISTRY: 'master/LIST_REGISTRY',
			HOST_REGISTRY: 'master/HOST_REGISTRY',
			LOCAL_STORAGE: 'master/LOCAL_STORAGE',
			errors: 'master/errors'
		})
	},
	watch: {
		errors(value) {
			const error = value.slice(-1)[0]
			this.$notify({
				group: 'foo',
				title: 'Important message',
				text: error.a
			})
		}
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
	min-width 930px

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
		width 256px
		margin-bottom $margin_base

		&-placeholder
			float right
			padding-left $padding_base
			width 256px
			height 1px

	&__errors-notifier
		position fixed
		right 0
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
