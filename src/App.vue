<template>
	<div>
		<div class="body__background-placeholder"></div>
		<div class="master body__master">
			<div class="master__widgetbar-placeholder">
				<widgetbar class="master__widgetbar">
					<dummy :length="3000" />
				</widgetbar>
			</div>
			<div class="master__sidebar-placeholder">
				<sidebar
					class="master__sidebar"
					:isCollapsed.sync="sidebar.isCollapsed"
				></sidebar>
			</div>
			<div class="master__main-placeholder">
				<main class="master__main">
					<dummy />
				</main>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sidebar from '@/components/local/Sidebar/index.vue'
import Widgetbar from '@/components/local/Widgetbar/index.vue'
import Main from '@/components/local/Main/index.vue'
import Dummy from '@/components/local/Dummy/index.vue'

@Component({
	components: {
		Sidebar,
		Widgetbar,
		Main,
		Dummy
	}
})
export default class MasterApp extends Vue {
	private readonly sidebar = {
		isCollapsed: false
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'

.master
	&__sidebar
		position fixed
		width 212px
		top $margin_base
		bottom 0

		&-placeholder
			float left
			width 212px
			padding-right $padding_base
			height 1px

	&__main
		&-placeholder
			float none
			overflow hidden

	&__widgetbar
		width 256px
		text-align justify
		margin-bottom $margin_base

		&-placeholder
			width 256px
			float right
			padding-left $padding_base
			height 1px
</style>
