<template>
	<div>
		<div v-for="(item,i) in sidebarMenuItems" :key="i" class="menu__item-container">
			<input
				type="radio"
				:id="`master-sidebar__menu-item_${i}`"
				class="menu__radio-items-input"
				name="master-sidebar__menu-item"
				:disabled="hasSubitems(item)"
				:checked="item.items ? item.items.some(isItemActive) : isItemActive(item)"
			/>
			<label :for="`master-sidebar__menu-item_${i}`">
				<component :href="item.url" :is="hasSubitems(item)?'div':'a'" class="menu__item">
					<div class="menu__icon">
						<svg class="menu__icon-svg">
							<use :xlink:href="`#icon-${item.icon}`" />
						</svg>
					</div>
					<div class="menu__title" v-if="!sidebarCollapsed">{{item.title}}</div>
					<div class="menu__arrow s-icon s-icon-arrow-right" v-if="hasSubitems(item)"></div>
				</component>
			</label>
			<div class="menu__subitems-wrapper" v-if="hasSubitems(item)">
				<div class="menu__subitems">
					<div v-for="(subitem,j) in item.items" :key="j" class="menu__subitem-container">
						<input
							type="radio"
							:id="`master-sidebar__menu-subitem_${j}`"
							class="menu__radio-subitems-input"
							name="master-sidebar__menu-subitem"
							:checked="isItemActive(subitem)"
						/>
						<label :for="`master-sidebar__menu-subitem_${j}`">
							<a class="menu__subitem" :href="subitem.url">{{subitem.title}}</a>
						</label>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

/* eslint max-len:0 */

export default {
	name: 'SidebarMenu',
	methods: {
		hasSubitems(item) {
			return item.items && item.items.length
		},
		...mapActions({
			setListRegistry: 'master/setListRegistry'
		}),
		isItemActive(item) {
			return item.url === decodeURI(`${location.pathname}${location.search}`)
		}
	},
	computed: {
		...mapGetters({
			LIST_REGISTRY: 'master/LIST_REGISTRY',
			HOST_REGISTRY: 'master/HOST_REGISTRY',
			sidebarCollapsed: 'master/sidebarCollapsed',
			sidebarMenuItems: 'master/sidebarMenuItems'
		})
	}
}
</script>

<style lang="stylus" scoped>
@import './../../../../assets/stylus/variables.styl'

a
	color $darkgrey
	outline none
	text-decoration none

.menu
	&__item
		display block
		position relative
		padding 7.5px $padding_base

		&:hover
			cursor pointer
			color $white
			box-shadow inset $border-width_large 0 0 $white

		&-container
			display block
			position relative

			&:hover .menu__subitems-wrapper
				display block

	&__radio-items-input
		display none

		&:checked+label>*
			color $white
			box-shadow inset $border-width_large 0 0 $white

	&__radio-subitems-input
		display none

		&:checked+label>*
			color $white
			background-color $lightblack

	&__icon
		position relative
		display inline-block
		height 24px
		width 24px
		vertical-align middle

		&-svg
			width 100%
			height 100%
			stroke-width 1.6
			stroke currentColor
			stroke-linecap round
			fill transparent
			stroke-miterlimit 4

	&__title
		display inline-block
		margin-left $margin_base
		vertical-align bottom
		text-transform uppercase

	&__arrow
		position absolute
		top 38%
		right $margin_base
		font-size $font-size_small

	&__subitems
		position absolute
		border-radius 0 $border-radius_base $border-radius_base 0
		background-color $deepblue
		padding $padding_small 0
		width 212px
		text-align left

		&-wrapper
			display none
			position absolute
			top 0
			right 1px
			width 0

	&__subitem
		display block
		padding 7.5px $padding_base
		font-size $font-size_small
		text-transform uppercase

		&:hover
			cursor pointer
			color $white
			background-color $lightblack
</style>
