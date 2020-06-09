<template>
	<div class="widgetbar" ref="widgetbar">
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
export default class Widgetbar extends Vue {}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
</style>
