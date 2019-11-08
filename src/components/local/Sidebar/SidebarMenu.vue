<template>
	<div class="menu">
		<div v-for="(item,i) in items" :key="i" class="menu__item-container">
			<input
				type="radio"
				:id="`master-sidebar__menu-item_${i}`"
				class="menu__radio-items-input"
				name="master-sidebar__menu-item"
				:checked="item.active || item.items.some(el=>el.active)"
			/>
			<label :for="`master-sidebar__menu-item_${i}`">
				<component :href="item.url" :is="hasSubitems(item)?'div':'a'" class="menu__item">
					<div class="menu__icon" :style="{'background-image':getIconUrl(item.icon)}"></div>
					<div class="menu__title">{{item.title}}</div>
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
							:checked="subitem.active"
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
import { mapGetters } from 'vuex'

export default {
	name: 'SidebarMenu',
	mounted() {
		spx()
			.time()
			.get()
			.then(el => {
				console.log(this.LIST_REGISTRY)
			})
	},
	data() {
		return {
			items: [
				{
					title: 'ресурсы',
					icon: 'globe',
					url: 'http://www.google.com',
					items: []
				},
				{
					title: 'инновации',
					icon: 'bulb',
					items: [
						{
							title: 'эврика',
							url: 'http://www.yandex.ru',
							active: true
						},
						{
							title: 'dme labs',
							url: 'http://www.mail.ru'
						}
					]
				}
			]
		}
	},
	methods: {
		getIconUrl(name) {
			return `url("http://aura.dme.aero.corp/common/Images/current/sidebar/menu/regular/${name}.png")`
		},
		hasSubitems(item) {
			return item.items && item.items.length
		}
	},
	computed: {
		...mapGetters({
			LIST_REGISTRY: 'master/LIST_REGISTRY'
		})
	}
}
</script>

<style lang="stylus" scoped>
@import './../../../assets/stylus/variables.styl'

a
	color $grey
	outline none
	text-decoration none

.menu
	margin $margin_smaller 0

	&__item
		display block
		position relative
		padding 7.5px $padding_base 7.5px $padding_base

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
		display inline-block
		height 24px
		width 24px
		vertical-align middle
		background-size cover
		background-position center center

	&__title
		display inline-block
		margin-left 15px
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

		&-wrapper
			display none
			position absolute
			top 0
			right 0
			width 0

	&__subitem
		display block
		padding 15px $padding_base
		font-size $font-size_small
		text-transform uppercase

		&:hover
			cursor pointer
			color $white
			background-color $lightblack
</style>
