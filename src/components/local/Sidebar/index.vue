<template functional>
	<component
		:is="
			props.isVertical
				? injections.components.LayoutVertical
				: injections.components.LayoutHorizontal
		"
	>
		<template #default>
			<component :is="injections.components.SidebarIcons" />
		</template>

		<template #options>
			<component :is="injections.components.SidebarOptions" v-if="false" />
		</template>

		<template #notification>
			<component
				:is="injections.components.SidebarNotification"
				:items="props.notification.items"
			/>
		</template>

		<template #logo>
			<component :is="injections.components.SidebarLogo" />
		</template>

		<template #profile>
			<component
				:is="injections.components.SidebarProfile"
				:avatarUrl="props.profile.avatar.url"
				:avatarPosition="props.profile.avatar.position"
				:name="props.profile.name"
				:isNameVisible="props.isVertical"
			/>
		</template>

		<template #menu>
			<component
				:is="injections.components.SidebarMenu"
				:tree="props.menu.tree"
				:isTitlesVisible="props.menu.isTitlesVisible"
				:isIconsVisible="props.menu.isIconsVisible"
				:isRootVisible="props.menu.isRootVisible"
				:isRootArrowVisible="props.menu.isRootArrowVisible"
				:delay="props.menu.delay"
			/>
		</template>

		<template #search>
			<component
				:is="injections.components.SidebarSearch"
				:url="props.search.url"
			/>
		</template>

		<template #footer>
			<component
				:is="injections.components.SidebarFooter"
				v-if="props.isVertical"
			/>
		</template>
	</component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SidebarIcons from '@/components/local/Sidebar/components/Icons/index.vue'
import SidebarLogo from '@/components/local/Sidebar/components/Logo/index.vue'
import SidebarOptions from '@/components/local/Sidebar/components/Options/index.vue'
import SidebarNotification from '@/components/local/Sidebar/components/Notification/index.vue'
import SidebarProfile from '@/components/local/Sidebar/components/Profile/index.vue'
import SidebarMenu from '@/components/local/Sidebar/components/Menu/index.vue'
import SidebarSearch from '@/components/local/Sidebar/components/Search/index.vue'
import SidebarFooter from '@/components/local/Sidebar/components/Footer/index.vue'
import LayoutVertical from '@/components/local/Sidebar/layouts/Vertical/index.vue'
import LayoutHorizontal from '@/components/local/Sidebar/layouts/Horizontal/index.vue'

@Component({
	name: 'Sidebar',
	inject: {
		components: {
			default: {
				LayoutVertical,
				LayoutHorizontal,
				SidebarIcons,
				SidebarMenu,
				SidebarOptions,
				SidebarProfile,
				SidebarNotification,
				SidebarLogo,
				SidebarSearch,
				SidebarFooter
			}
		}
	}
})
export default class Sidebar extends Vue {
	@Prop({ type: Boolean, default: false }) isVertical!: boolean

	@Prop({ type: Object }) notification!: object

	@Prop({ type: Object }) profile!: object

	@Prop({ type: Object }) menu!: object

	@Prop({ type: Object }) search!: object
}
</script>
