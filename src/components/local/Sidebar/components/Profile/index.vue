<template functional>
	<div class="profile">
		<a :href="props.profilePageUrl" class="profile__a">
			<div class="profile__avatar" :style="$options.methods.getAvatarStyle(props)"></div>
			<div v-if="props.isNameVisible" class="profile__name">{{ props.name }}</div>
			<div style="clear:both"></div>
		</a>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
	name: 'SidebarProfile',
	methods: {
		getAvatarStyle(props: any): object {
			let styles = {}
			if (props.avatarUrl) {
				styles = {
					backgroundImage: `url(${props.avatarUrl})`,
					backgroundPosition: props.avatarPosition
				}
			}
			return styles
		}
	}
})
export default class SidebarProfile extends Vue {
	@Prop(String) readonly name!: string

	@Prop({ type: String, default: '/' }) readonly profilePageUrl!: string

	@Prop({ type: String, default: '' }) readonly avatarUrl!: string

	@Prop({ type: String, default: '' }) readonly avatarPosition!: string

	@Prop({ type: Boolean, default: true }) readonly isNameVisible!: boolean
}
</script>

<style lang="stylus">
@import '~@/assets/styles/paths.styl'
@import '~@/assets/styles/functions.styl'
@import '~@/assets/styles/variables.styl'

$anonymous-image = $imagesDir + 'anonymous/index.png'

.profile
	padding 12px $padding_base
	box-sizing border-box

	&__avatar
		display inline-block
		background-color $color-gray_lightest
		height 48px
		width 48px
		border-radius $border-radius_largest
		border-width $border-width_base
		border-color $color-gray_dark
		border-style solid
		box-sizing border-box
		vertical-align middle
		background-image url(setPath($anonymous-image))
		background-size contain
		background-position center center

	&__name
		display inline-block
		max-width 63%
		margin-left 15px
		line-height $line-height_small
		vertical-align middle
		color $color-gray_base

	&__a
		display inline-block

	&:hover
		cursor pointer
</style>
