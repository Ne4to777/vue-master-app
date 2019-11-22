<template>
	<div>
		<div class="notification__icon master-sidebar__notification" :class="{active:count}"></div>
		<div class="notification__count" v-if="count">{{count}}</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'SidebarNotification',
	data() {
		return {
			title: 'Уведомления'
		}
	},
	methods: {
		...mapActions({
			setNotifiedFavicon: 'master/setNotifiedFavicon',
			unsetNotifiedFavicon: 'master/unsetNotifiedFavicon'
		})
	},
	computed: {
		...mapGetters({
			sidebarNotificationItems: 'master/sidebarNotificationItems'
		}),
		count() {
			const { length } = this.sidebarNotificationItems
			if (length) this.setNotifiedFavicon()
			else this.unsetNotifiedFavicon()
			return !length ? '' : length > 9 ? '9+' : `${length}`
		}
	}
}
</script>

<style lang="stylus" scoped>
@import './../../../../assets/stylus/variables.styl'

$size = 20px

.notification
	&__count
		background-color $lightblue
		position absolute
		font-size $font-size_small
		line-height $line-height_larger
		text-align center
		user-select none
		color $white
		width 100%
		height 100%
		top -10px
		right -10px
		border-radius $border-radius_largest
		border-width $border-width_base
		border-color $deepblue
		border-style solid
		cursor pointer

	&__icon
		width $size
		height $size
		background-size $size * 2
		cursor pointer
		background-position-y center

.active
	background-position-x -($size)
</style>
