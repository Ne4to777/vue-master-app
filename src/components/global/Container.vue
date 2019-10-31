<template>
	<div class="container" :class="{'container_styled':styled}">
		<header>
			<slot name="header"></slot>
		</header>
		<main>
			<slot></slot>
		</main>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'Container',
	props: {
		styled: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {}
	}
}
</script>

<style lang="stylus" scoped>
@import './../../assets/stylus/variables.styl'

.container
	background-color $white
	vertical-align top

	&_styled
		padding $padding_base
		border-radius $border-radius_base
		border $border-width_base solid $whisper
</style>
