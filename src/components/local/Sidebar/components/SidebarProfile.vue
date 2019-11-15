<template>
	<a href="/">
		<div class="profile__avatar" :style="{'background-image':`url('${USER.avatar}')`}"></div>
		<div class="profile__info" v-if="!sidebarCollapsed">{{USER.shortname}}</div>
		<div style="clear:both"></div>
	</a>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'SidebarProfile',
	data() {
		return {}
	},
	methods: {},
	computed: {
		...mapGetters({
			sidebarCollapsed: 'master/sidebarCollapsed',
			USER: 'master/USER'
		})
	}
}
</script>

<style lang="stylus" scoped>
@import './../../../../assets/stylus/variables.styl'

.profile
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
		background-size cover
		background-position center center

	&__info
		display inline-block
		max-width 63%
		margin-left 15px
		line-height $line-height_small
		vertical-align middle
		color $grey

	&:hover
		cursor pointer
</style>
