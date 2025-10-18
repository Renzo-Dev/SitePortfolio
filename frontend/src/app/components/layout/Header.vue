<template>
	<header :class="['header', { 'header--scrolled': isScrolled }]">
		<div class="container">
			<div class="header__content">
				<!-- Logo -->
				<NuxtLink to="/" class="header__logo">
					<span class="header__logo-text">Dan Koshevoy</span>
				</NuxtLink>

				<!-- Desktop навигация -->
				<nav
					class="header__nav"
					:class="{ 'header__nav--open': isMobileMenuOpen }"
				>
					<a
						v-for="link in navLinks"
						:key="link.id"
						:href="link.href"
						class="header__link"
						@click.prevent="handleNavClick(link.id)"
					>
						{{ link.label }}
					</a>

					<!-- CTA кнопка в меню -->
					<Button
						variant="primary"
						class="header__cta-mobile"
						@click="scrollToContact"
					>
						Заказать проект
					</Button>
				</nav>

				<!-- CTA кнопка desktop -->
				<Button variant="primary" class="header__cta" @click="scrollToContact">
					Заказать проект
				</Button>

				<!-- Burger menu -->
				<button
					class="header__burger"
					:class="{ 'header__burger--open': isMobileMenuOpen }"
					aria-label="Toggle menu"
					@click="toggleMobileMenu"
				>
					<span />
					<span />
					<span />
				</button>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue'

// Отслеживание скролла
const { isScrolled } = useHeaderScroll(100)

// Мобильное меню
const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu()

// Навигация
const { navLinks, navigateToSection } = useNavigation()

// Обработчик клика по навигации
const handleNavClick = (id: string) => {
	navigateToSection(id, -80, closeMobileMenu)
}

// Скролл к контактам
const scrollToContact = () => {
	navigateToSection('contact', -80, closeMobileMenu)
}
</script>

<style scoped lang="scss">
@use '~/assets/styles/components/header';
</style>
