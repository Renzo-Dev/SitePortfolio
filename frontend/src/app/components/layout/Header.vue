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
					<NuxtLink
						v-for="link in navLinks"
						:key="link.href"
						:to="link.href"
						class="header__link"
						@click="closeMobileMenu"
					>
						{{ link.label }}
					</NuxtLink>

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
import { useScroll } from '@vueuse/core'
import Button from '~/components/ui/Button.vue'

// Отслеживание скролла
const { y } = useScroll(window)
const isScrolled = computed(() => y.value > 100)

// Мобильное меню
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
	isMobileMenuOpen.value = !isMobileMenuOpen.value
	// Блокируем скролл при открытом меню
	document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
	isMobileMenuOpen.value = false
	document.body.style.overflow = ''
}

// Навигация
const navLinks = [
	{ label: 'Обо мне', href: '#about' },
	{ label: 'Портфолио', href: '#portfolio' },
	{ label: 'Услуги', href: '#services' },
	{ label: 'Контакты', href: '#contact' },
]

// Скролл к контактам
const scrollToContact = () => {
	closeMobileMenu()
	const element = document.getElementById('contact')
	if (element) {
		const offset = 80
		const elementPosition = element.getBoundingClientRect().top + window.scrollY
		window.scrollTo({
			top: elementPosition - offset,
			behavior: 'smooth', // Плавный нативный скролл
		})
	}
}

// Закрываем меню при ресайзе
onMounted(() => {
	window.addEventListener('resize', () => {
		if (window.innerWidth >= 1024) {
			closeMobileMenu()
		}
	})
})
</script>

<style scoped lang="scss">
@use '~/assets/styles/components/header';
</style>
