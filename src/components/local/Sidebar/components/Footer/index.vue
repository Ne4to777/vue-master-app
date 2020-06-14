<template>
	<div class="footer">
		<div class="footer__item footer__item_pointer">Обратная связь</div>
		<a class="footer__item" href="/">Об Ауре</a>
		<div class="footer__item">
			Нашли ошибку? Выделите её и нажмите Ctrl + Enter
		</div>
		<div class="footer__item">© , «Aura» – портал</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SidebarFooter extends Vue {}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'

.footer
	font-size $font-size_small

	&__item
		display block
		margin-top $margin_smallest

		&_pointer
			cursor pointer
</style>
