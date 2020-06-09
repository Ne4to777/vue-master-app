<template>
	<div class="profile">
		<a href="/">
			<div class="profile__avatar"></div>
			<div class="profile__info">Алексеев Алексей Сергеевич</div>
			<div style="clear:both"></div>
		</a>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
	data() {
		return {}
	},
	computed: {}
})
export default class SidebarProfile extends Vue {}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/paths.styl'
@import '~@/assets/styles/variables.styl'

.profile
	background-color $color-grey-darker
	padding 12px $padding_base
	box-sizing border-box

	&__avatar
		display inline-block
		background-color $color-grey_lightest
		height 48px
		width 48px
		border-radius $border-radius_largest
		border-width $border-width_base
		border-color $color-grey_dark
		border-style solid
		box-sizing border-box
		vertical-align middle
		background-image $anonymous-image
		background-size cover
		background-position center center

	&__info
		display inline-block
		max-width 63%
		margin-left 15px
		line-height $line-height_small
		vertical-align middle
		color $color-grey_base

	&:hover
		cursor pointer
</style>
