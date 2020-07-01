<template>
	<div class="widgetbar" ref="widgetbar">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { throttle } from '@/utility/runtime'

Component.registerHooks(['mounted', 'beforeDestroy'])

@Component({
	name: 'Widgetbar'
})
export default class Widgetbar extends Vue {
	private readonly throttleMS: number = 20

	private readonly scroll = {
		yOffset: 0,
		xOffset: 0
	}

	private readonly scrollHandlerThrottled: Function = throttle(this.scrollHandler, this.throttleMS)

	private readonly resizeHandlerThrottled: Function = throttle(this.resizeHandler, this.throttleMS)

	mounted(): void {
		window.addEventListener('scroll', this.scrollHandlerThrottled as EventListener)
		window.addEventListener('resize', this.resizeHandlerThrottled as EventListener)
	}

	beforeDestroy(): void {
		window.removeEventListener('scroll', this.scrollHandlerThrottled as EventListener)
		window.removeEventListener('resize', this.resizeHandlerThrottled as EventListener)
	}

	setPosition({ fixed, left, top }: { fixed?: boolean; left?: number; top?: number }): void {
		const { style } = this.$refs.widgetbar as HTMLDivElement
		const positionStyle = fixed ? 'fixed' : 'relative'
		if (style.position !== positionStyle) style.position = positionStyle

		const leftStyle = left ? `${left}px` : ''
		if (style.left !== leftStyle) style.left = leftStyle

		const topStyle = top ? `${top}px` : ''
		if (style.top !== topStyle) style.top = topStyle
	}

	resizeHandler(): void {
		this.setPosition({ fixed: false })
	}

	scrollHandler(): void {
		const {
			pageYOffset,
			pageXOffset
		} = window
		const pageXOffsetRounded = Math.round(pageXOffset)
		const pageYOffsetRounded = Math.round(pageYOffset)
		const documentHeight = document.documentElement.clientHeight
		const { widgetbar } = this.$refs as { widgetbar: HTMLDivElement }
		const {
			top,
			bottom,
			left
		} = widgetbar.getBoundingClientRect()
		const topRounded = Math.round(top)
		const bottomRounded = Math.round(bottom)
		const { scroll } = this
		const { clientHeight: widgetbarHeight } = widgetbar

		if (pageXOffsetRounded !== scroll.xOffset) { // horizontal
			this.setPosition({
				fixed: false,
				top: topRounded + pageYOffsetRounded
			})
			scroll.xOffset = pageXOffsetRounded
		}

		if (pageYOffsetRounded !== scroll.yOffset) { // vertical
			if (documentHeight <= widgetbarHeight) {
				if (pageYOffsetRounded > scroll.yOffset) { // down
					const documentHeightMargined = documentHeight
					if (bottomRounded < documentHeightMargined) { // over
						const topOffset = documentHeightMargined - widgetbarHeight
						this.setPosition({ fixed: true, left, top: topOffset })
					} else if (bottomRounded > documentHeightMargined) { // inside
						const topOffset = topRounded + pageYOffsetRounded
						this.setPosition({ fixed: false, top: topOffset })
					}
				} else if (pageYOffsetRounded < scroll.yOffset) { //  up
					if (top >= 0) { // over
						this.setPosition({ fixed: true, left })
					} else { // inside
						const topOffset = topRounded + pageYOffsetRounded
						this.setPosition({ fixed: false, left: 0, top: topOffset })
					}
				}
			} else {
				this.setPosition({ fixed: true, left })
			}
			scroll.yOffset = pageYOffsetRounded
		}
	}
}
</script>

<style lang="stylus">
@import '~@/assets/styles/variables.styl'

.widgetbar
	width inherit
	text-align justify
	margin-bottom $margin_base
</style>
