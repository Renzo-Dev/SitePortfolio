<template>
	<header
		:class="headerClasses"
		:style="{
			transform: headerVisible ? 'translateY(0)' : 'translateY(-100%)',
		}"
	>
		<div class="container">
			<div class="header__content">
				<!-- Логотип -->
				<NuxtLink to="/" class="header__logo" @click="closeMobileMenu">
					<span class="header__logo-text">DK</span>
				</NuxtLink>

				<!-- Навигация Desktop -->
				<nav class="header__nav header__nav--desktop">
					<NuxtLink
						v-for="link in navLinks"
						:key="link.id"
						:to="link.to"
						class="header__link"
						@click="scrollToSection(link.id)"
					>
						{{ link.label }}
					</NuxtLink>
				</nav>

				<!-- Burger меню -->
				<button
					class="header__burger"
					:class="{ 'is-active': mobileMenuOpen }"
					@click="toggleMobileMenu"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</div>

		<!-- Мобильное меню -->
		<Transition name="mobile-menu">
			<div v-if="mobileMenuOpen" class="mobile-menu">
				<nav class="mobile-menu__nav">
					<NuxtLink
						v-for="link in navLinks"
						:key="link.id"
						:to="link.to"
						class="mobile-menu__link"
						@click="handleMobileLinkClick(link.id)"
					>
						{{ link.label }}
					</NuxtLink>
				</nav>
			</div>
		</Transition>
	</header>
</template>

<script setup lang="ts">
// Навигационные ссылки
const navLinks = [
	{ id: 'about', to: '#about', label: 'Обо мне' },
	{ id: 'services', to: '#services', label: 'Услуги' },
	{ id: 'portfolio', to: '#portfolio', label: 'Портфолио' },
	{ id: 'contact', to: '#contact', label: 'Контакты' },
]

// Состояния
const isScrolled = ref(false)
const headerVisible = ref(true)
const mobileMenuOpen = ref(false)
let lastScrollTop = 0

// Скролл обработчик
const handleScroll = () => {
	const currentScroll = window.pageYOffset || document.documentElement.scrollTop

	// Определяем, прокручено ли больше 100px
	isScrolled.value = currentScroll > 100

	// Скрываем/показываем header при скролле
	if (currentScroll > lastScrollTop && currentScroll > 100) {
		// Скролл вниз - скрываем
		headerVisible.value = false
	} else {
		// Скролл вверх - показываем
		headerVisible.value = true
	}

	lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
}

// Открытие/закрытие мобильного меню
const toggleMobileMenu = () => {
	mobileMenuOpen.value = !mobileMenuOpen.value

	// Блокируем скролл body при открытом меню
	if (mobileMenuOpen.value) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = ''
	}
}

const closeMobileMenu = () => {
	mobileMenuOpen.value = false
	document.body.style.overflow = ''
}

// Плавный скролл к секции
const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId)
	if (element) {
		element.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
}

const handleMobileLinkClick = (sectionId: string) => {
	closeMobileMenu()
	setTimeout(() => {
		scrollToSection(sectionId)
	}, 300)
}

// Классы header
const headerClasses = computed(() => [
	'header',
	{
		'header--scrolled': isScrolled.value,
		'header--menu-open': mobileMenuOpen.value,
	},
])

// Lifecycle hooks
onMounted(() => {
	window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
	document.body.style.overflow = ''
})
</script>

<style lang="scss" scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: $z-sticky;
	@include transition(all, $transition-base);
	background-color: rgba($white, 0.8);
	backdrop-filter: blur(10px);

	&--scrolled {
		background-color: rgba($white, 0.95);
		box-shadow: $shadow-sm;
	}

	&__content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: $space-4 0;

		@include respond-to('md') {
			padding: $space-5 0;
		}
	}

	// Логотип
	&__logo {
		font-size: $text-2xl;
		font-weight: 700;
		color: $primary;
		@include transition(transform);

		&:hover {
			transform: scale(1.05);
		}

		&-text {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 48px;
			height: 48px;
			border-radius: $rounded-lg;
			background: linear-gradient(135deg, $primary, $secondary);
			color: $white;
		}
	}

	// Навигация Desktop
	&__nav {
		&--desktop {
			display: none;

			@include respond-to('lg') {
				display: flex;
				gap: $space-8;
			}
		}
	}

	&__link {
		font-size: $text-base;
		font-weight: 500;
		color: $dark;
		position: relative;
		@include transition(color);

		&::after {
			content: '';
			position: absolute;
			bottom: -4px;
			left: 0;
			width: 0;
			height: 2px;
			background-color: $primary;
			@include transition(width);
		}

		&:hover {
			color: $primary;

			&::after {
				width: 100%;
			}
		}
	}

	// Burger меню
	&__burger {
		@include reset-button;
		display: flex;
		flex-direction: column;
		gap: 6px;
		width: 32px;
		height: 32px;
		justify-content: center;
		z-index: $z-modal;

		@include respond-to('lg') {
			display: none;
		}

		span {
			display: block;
			width: 100%;
			height: 2px;
			background-color: $dark;
			@include transition(all);
			transform-origin: center;
		}

		&.is-active {
			span:nth-child(1) {
				transform: rotate(45deg) translate(7px, 7px);
			}

			span:nth-child(2) {
				opacity: 0;
			}

			span:nth-child(3) {
				transform: rotate(-45deg) translate(7px, -7px);
			}
		}
	}
}

// Мобильное меню
.mobile-menu {
	position: fixed;
	top: 76px;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: $white;
	z-index: $z-fixed;
	padding: $space-6;
	overflow-y: auto;

	@include respond-to('lg') {
		display: none;
	}

	&__nav {
		display: flex;
		flex-direction: column;
		gap: $space-4;
	}

	&__link {
		font-size: $text-xl;
		font-weight: 600;
		color: $dark;
		padding: $space-4;
		border-radius: $rounded-lg;
		@include transition(all);

		&:hover,
		&:active {
			background-color: rgba($primary, 0.1);
			color: $primary;
			transform: translateX(8px);
		}
	}
}

// Анимация мобильного меню
.mobile-menu-enter-active,
.mobile-menu-leave-active {
	transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}
</style>
