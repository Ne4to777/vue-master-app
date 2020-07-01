<template>
	<div class="dummy" ref="dummy">{{ content }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import textJSON from './text.json'

@Component({
	name: 'Dummy'
})
export default class Dummy extends Vue {
	@Prop(Number) readonly length!: number

	get content(): string {
		let result = ''
		const { content } = textJSON
		if (this.length) {
			if (this.length > content.length) {
				const fullCount = Math.floor(this.length / content.length)
				const partCount = this.length % content.length
				result = content.repeat(fullCount) + content.substr(0, partCount)
			} else {
				result = content.substr(0, this.length)
			}
		} else {
			result = content
		}
		return result
	}
}
</script>
