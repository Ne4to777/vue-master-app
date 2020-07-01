<template functional>
	<a href="/" class="logo">Аура</a>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
	name: 'SidebarLogo'
})
export default class SidebarLogo extends Vue { }
</script>

<style lang="stylus">
@import '~@/assets/styles/paths.styl'
@import '~@/assets/styles/variables.styl'

.logo
	background-image $logo-background
	background-size auto 100%
	background-repeat no-repeat
</style>
