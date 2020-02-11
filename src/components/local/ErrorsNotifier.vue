<template>
	<notifications
		class="errors-notifier"
		group="errors"
		position="bottom right"
		:width="400"
		:duration="60000"
		:closeOnClick="false"
	>
		<template slot="body" slot-scope="props">
			<div class="errors-notifier__error">
				<div class="errors-notifier__title">{{props.item.title}}</div>
				<svg class="errors-notifier__close" @click="props.close">
					<use xlink:href="#icon-cross" />
				</svg>
				<div class="errors-notifier__content" v-html="getTextHTML(props.item.text)"></div>
			</div>
		</template>
	</notifications>
</template>

<script>
import { mapMasterGetters } from '@/storage/utility'

export default {
	name: 'ErrorsNotifier',
	computed: {
		...mapMasterGetters(['errors'])
	},
	methods: {
		getTextHTML(item) {
			return `
				<span class="errors-notifier__name">${item.name}</span>: <span class="errors-notifier__info">${item.info}</span>`
		}
	},
	watch: {
		errors(value) {
			this.$notify(value.slice(-1)[0])
		}
	}
}
</script>

<style lang="stylus">
@import './../../assets/stylus/variables.styl'

.errors-notifier
	margin-bottom $margin_base

	&__error
		position relative
		padding $padding_small $padding_base
		border-radius $border-radius_base
		border-width $border-width_base
		border-color $red
		border-style solid
		background-color $white

	&__title
		text-align left
		line-height $line-height_smaller
		font-size $font-size_largest
		color $red
		font-weight $font-weight_base

	&__content
		font-size $font-size_base
		text-align right
		margin-top $margin_smallest

	&__name
		font-weight $font-weight_large

	&__close
		width 12px
		height 12px
		text-align center
		position absolute
		top $margin_smallest
		right $margin_smallest
		cursor pointer
		stroke-width 4
		stroke $lightblack
		stroke-linecap round
</style>
