<template>
	<div class="collapser">
		<div class="s-icon s-icon-arrow-left"></div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
	data() {
		return {}
	},
	methods: {},
	computed: {}
})
export default class SidebarCollapser extends Vue {}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'

.collapser
	border-radius 0 $border-radius_base $border-radius_base 0
	text-align center
	line-height 80px
	font-size 10px
	color #FFFFFF
	background-color #4D4F51
	cursor pointer
</style>
