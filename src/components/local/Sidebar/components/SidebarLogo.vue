<template>
	<div>
		<a href="/" class="logo master-sidebar__logo"></a>
	</div>
</template>

<script>
export default {
	name: 'SidebarLogo',
	data() {
		return {}
	},
	methods: {},
	computed: {}
}
</script>

<style lang="stylus" scoped>
@import './../../../../assets/stylus/variables.styl'

.logo
	display block
	height 28px
	width 48%
	// background-color $green
	background-size auto 100%
	background-repeat no-repeat
</style>
