<template>
	<div class="dummy" ref="dummy">{{content}}</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import textJSON from './text.json'

@Component({
	props: {
		length: Number
	},
	data() {
		return {}
	},
	methods: {},
	computed: {
		content() {
			const { content } = textJSON
			return this.length ? content.substr(0, this.length) : content
		}
	}
})
export default class Dummy extends Vue {}
</script>

<style lang="stylus" scoped></style>
