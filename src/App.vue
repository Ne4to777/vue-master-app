<template>
	<div>
		<test />
		<slot></slot>
	</div>
</template>

<script>
import Test from '@/components/Test.vue'

export default {
	name: 'master-app',
	components: {
		Test
	}
}
</script>

<style lang="stylus" scoped>
@import '/assets/global.styl'
</style>
