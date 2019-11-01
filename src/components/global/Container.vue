<template>
	<div>
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
</style>
