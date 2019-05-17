<template>
	<div>{{time}}</div>
</template>

<script>
import spx from 'spx-com'
export default {
	name: 'Test',
	data() {
		return {
			time: ''
		}
	},
	async created() {
		this.time = (await spx.time.getCurrent()).format('dd.MM.yyyy HH:mm')
	}
}
</script>

<style lang="stylus" scoped>
body
	font-size 14px
</style>
