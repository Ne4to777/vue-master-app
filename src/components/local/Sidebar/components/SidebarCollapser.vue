<template>
	<div>
		<div class="collapser s-icon" :class="arrowClass" v-if="isCollapserVisible" @click="toggle"></div>
	</div>
</template>

<script>
import { mapMasterGetters, mapMasterActions } from '@/storage/utility'

export default {
	name: 'SidebarCollapser',
	data() {
		return {
			toggledByCollapser: false
		}
	},
	methods: {
		toggle() {
			console.log('click')
			this.setSidebarCollapsed(!this.sidebarCollapsed)
		},
		...mapMasterActions(['setSidebarCollapsed'])
	},
	computed: {
		arrowClass() {
			return `s-icon-arrow-${this.sidebarCollapsed ? 'right' : 'left'}`
		},
		isCollapserVisible() {
			return this.sidebarCollapsed || this.sidebarPlaceholderCollapsed
		},
		...mapMasterGetters(['sidebarCollapsed', 'sidebarPlaceholderCollapsed'])
	}
}
</script>

<style lang="stylus" scoped>
@import './../../../../assets/stylus/variables.styl'

.collapser
	width 15px
	height 80px
	border-radius 0 $border-radius_base $border-radius_base 0
	text-align center
	line-height 80px
	font-size 10px
	color #FFFFFF
	background-color #4D4F51
	cursor pointer
</style>
