<template>
	<div>
		<test/>
		<slot></slot>
	</div>
</template>


<script>
import '@/assets/global.styl'
import Test from '@/components/Test'
export default {
	name: 'master-app',
	components: { Test }
}
</script>