<template functional>
	<svg :class="[data.class, data.staticClass]" :viewBox="props.viewBox">
		<use :xlink:href="`#${props.refId}`" />
	</svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
	name: 'SvgRef'
})
export default class SvgRef extends Vue {
	@Prop(String) readonly viewBox!: string

	@Prop(String) readonly refId!: string
}
</script>
