<template functional>
	<a href="/" class="logo"></a>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
	name: 'SidebarLogo'
})
export default class SidebarLogo extends Vue {}
</script>

<style lang="stylus">
@import '~@/assets/styles/paths.styl'
@import '~@/assets/styles/functions.styl'
@import '~@/assets/styles/variables.styl'

$logo-background = $imagesDir + 'sidebar/logo/index.png'

.logo
	display block
	width 100%
	height 100%
	background-image url(setPath($logo-background))
	background-size auto 100%
	background-repeat no-repeat
</style>
