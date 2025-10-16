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
					@click="toggleMobileMenu"
					aria-label="Toggle menu"
				>
					<span></span>
					<span></span>
					<span></span>
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
@use '~/assets/styles/variables' as *;

.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: $z-sticky;
	padding: $spacing-lg 0;
	transition: all $transition-base;

	&--scrolled {
		@include glass;
		box-shadow: $shadow-md;
		padding: $spacing-md 0;
	}

	&__content {
		@include flex-between;
	}

	&__logo {
		font-size: $text-body-lg;
		font-weight: 700;
		color: $text-primary;
		text-decoration: none;
		transition: color $transition-base;

		&:hover {
			color: $text-secondary;
		}
	}

	&__nav {
		display: flex;
		align-items: center;
		gap: $spacing-xl;

		@include mobile {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			background: $bg-primary;
			flex-direction: column;
			justify-content: center;
			gap: $spacing-lg;
			opacity: 0;
			visibility: hidden;
			transition: all $transition-base;
			z-index: -1;

			&--open {
				opacity: 1;
				visibility: visible;
			}
		}
	}

	&__link {
		position: relative;
		color: $text-secondary;
		font-weight: 500;
		transition: color $transition-base;

		&::after {
			content: '';
			position: absolute;
			bottom: -4px;
			left: 50%;
			transform: translateX(-50%);
			width: 0;
			height: 1px;
			background: $text-primary;
			transition: width $transition-base;
		}

		&:hover {
			color: $text-primary;

			&::after {
				width: 100%;
			}
		}

		@include mobile {
			font-size: $text-h4;
		}
	}

	&__cta {
		@include mobile {
			display: none;
		}
	}

	&__cta-mobile {
		display: none;

		@include mobile {
			display: inline-flex;
		}
	}

	&__burger {
		display: none;
		flex-direction: column;
		gap: 6px;
		width: 30px;
		height: 24px;
		background: none;
		border: none;
		cursor: pointer;
		z-index: 1;

		@include mobile {
			display: flex;
		}

		span {
			width: 100%;
			height: 2px;
			background: $text-primary;
			transition: all $transition-base;
		}

		&--open {
			span:nth-child(1) {
				transform: rotate(45deg) translate(8px, 8px);
			}

			span:nth-child(2) {
				opacity: 0;
			}

			span:nth-child(3) {
				transform: rotate(-45deg) translate(8px, -8px);
			}
		}
	}
}
</style>
