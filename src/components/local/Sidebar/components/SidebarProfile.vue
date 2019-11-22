<template>
	<a href="/">
		<div class="profile__avatar master-sidebar__profile-avatar" :style="avatar"></div>
		<div class="profile__info" v-if="!sidebarCollapsed">{{name}}</div>
		<div style="clear:both"></div>
	</a>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'SidebarProfile',
	data() {
		return {
			fake: ''
		}
	},
	computed: {
		...mapGetters({
			sidebarCollapsed: 'master/sidebarCollapsed',
			USER: 'master/USER'
		}),
		avatar() {
			const style = {}
			// this.fake()
			if (this.USER.avatar) {
				if (this.USER.avatar.current) {
					style['background-image'] = `url(${this.USER.avatar.current})`
				}
				if (this.USER.avatar.current) {
					style['background-position'] = `url(${this.USER.avatar.position})`
				}
			}
			return style
		},
		name() {
			return this.USER.name ? this.USER.name.short : ''
		}
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
