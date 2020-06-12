
<template>
	<div class="profile">
		<a href="/">
			<div class="profile__avatar" :style="avatarStyle"></div>
			<div class="profile__name">{{ name }}</div>
			<div style="clear:both"></div>
		</a>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SidebarProfile extends Vue {
	@Prop(String) readonly name!: string

	@Prop({ type: String, default: '' }) readonly avatarUrl!: string

	@Prop({ type: String, default: '' }) readonly avatarPosition!: string

	get avatarStyle(): object {
		let styles = {}
		if (this.avatarUrl) {
			styles = {
				backgroundImage: `url(${this.avatarUrl})`,
				backgroundPosition: this.avatarPosition
			}
		}
		return styles
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/paths.styl'
@import '~@/assets/styles/variables.styl'

.profile
	background-color $color-grey_darker
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

	&__name
		display inline-block
		max-width 63%
		margin-left 15px
		line-height $line-height_small
		vertical-align middle
		color $color-grey_base

	&:hover
		cursor pointer
</style>
