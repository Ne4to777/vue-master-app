<template>
	<div>
		<a href="/" class="logo master-sidebar__logo">Аура</a>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SidebarLogo extends Vue {}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/paths.styl'
@import '~@/assets/styles/variables.styl'

.logo
	background-image $logo-background
	background-size auto 100%
	background-repeat no-repeat
</style>
