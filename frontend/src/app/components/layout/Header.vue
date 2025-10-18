<template>
	<header :class="['header', { 'header--scrolled': isScrolled }]">
		<div class="container">
			<div class="header__content">
				<!-- Логотип -->
				<NuxtLink to="/" class="header__logo"> Dan Koshevoy </NuxtLink>

				<!-- Desktop навигация -->
				<nav class="header__nav-desktop">
					<a
						v-for="link in navLinks"
						:key="link.id"
						:href="link.href"
						class="header__link-desktop"
						@click.prevent="handleNavClick(link.id)"
					>
						{{ link.label }}
					</a>
				</nav>

				<!-- CTA кнопка desktop -->
				<Button variant="primary" class="header__cta" @click="scrollToContact">
					Связаться
				</Button>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue'

// Отслеживание скролла
const { isScrolled } = useHeaderScroll(100)

// Навигация
const { navLinks, navigateToSection } = useNavigation()

// Обработчик клика по навигации
const handleNavClick = (id: string) => {
	navigateToSection(id, -80)
}

// Скролл к контактам
const scrollToContact = () => {
	navigateToSection('contact', -80)
}
</script>

<style scoped lang="scss">
@use '~/assets/styles/components/header';
</style>
