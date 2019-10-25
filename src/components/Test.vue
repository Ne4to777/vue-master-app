<template>
	<div>{{time}}</div>
</template>

<script>
export default {
	name: 'Test',
	data() {
		return {
			time: ''
		}
	},
	async created() {
		this.time = (await spx()
			.time()
			.get()).format('dd.MM.yyyy HH:mm')
	}
}
</script>

<style lang="stylus" scoped>
body
	font-size 14px
</style>
