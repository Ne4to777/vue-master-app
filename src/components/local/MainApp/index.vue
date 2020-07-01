<template functional>
	<div class="main-app" :class="[data.class, data.staticClass]">
		<slot></slot>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
	name: 'MainApp'
})
export default class MainApp extends Vue {}
</script>
