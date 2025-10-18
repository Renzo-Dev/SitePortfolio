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
	{ id: 'about', label: 'Обо мне', href: '#about' },
	{ id: 'portfolio', label: 'Портфолио', href: '#portfolio' },
	{ id: 'services', label: 'Услуги', href: '#services' },
	{ id: 'contact', label: 'Контакты', href: '#contact' },
]

// Плавный скролл через Lenis (fallback на нативный)
const scrollToSection = inject<(id: string, offset?: number) => void>(
	'scrollToSection',
	(id: string) => {
		// Fallback на нативный скролл
		const element = document.getElementById(id)
		if (element) {
			const offset = 80
			const elementPosition =
				element.getBoundingClientRect().top + window.scrollY
			window.scrollTo({
				top: elementPosition - offset,
				behavior: 'smooth',
			})
		}
	}
)

// Обработчик клика по навигации
const handleNavClick = (id: string) => {
	closeMobileMenu()
	scrollToSection(id, -80)
}

// Скролл к контактам
const scrollToContact = () => {
	closeMobileMenu()
	scrollToSection('contact', -80)
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
