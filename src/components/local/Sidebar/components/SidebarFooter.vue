<template>
	<div>
		<div class="footer__item cursor_pointer">Обратная связь</div>
		<a class="footer__item" href="/">Об Ауре</a>
		<div class="footer__item">Нашли ошибку? Выделите её и нажмите Ctrl + Enter</div>
		<div class="footer__item">© {{new Date().getFullYear()}}, «Aura» – портал</div>
	</div>
</template>

<script>
export default {
	name: 'SidebarFooter'
}
</script>

<style lang="stylus" scoped>
@import './../../../../assets/stylus/variables.styl'

a
	display block

.footer__item
	margin-top $margin_smallest
</style>
