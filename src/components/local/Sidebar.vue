<template>
	<div
		class="sidebar__placeholder"
		:style="{width:currentWidth}"
	>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
</template>

<script>
/* eslint {object-shorthand:0} */

export default {
	name: 'Sidebar',
	components: {},
	props: {
		collapsed: Boolean
	},
	data() {
		return {
			init: this.mapProps(),
			current: this.mapProps(),
			width: {
				base: '212px',
				smallest: '88px'
			}
		}
	},
	computed: {
		currentWidth() {
			return this.current.collapsed ? this.width.smallest : this.width.base
		}
	},
	methods: {
		mapProps() {
			return {
				collapsed: this.collapsed
			}
		},
		setValue(key, value) {
			this.current[key] = value
		}
	},
	watch: {
		collapsed(value) {
			this.setValue('collapsed', value)
		},
		'current.value'(value) {
			this.$emit('collapse', value)
		}
	}
}
</script>

<style lang="stylus" scoped>
@import './../../assets/stylus/variables.styl'
</style>
