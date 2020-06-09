<template>
	<div class="main" ref="main">
		<slot></slot>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
	data() {
		return {}
	},
	methods: {},
	computed: {}
})
export default class Main extends Vue {}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
</style>
