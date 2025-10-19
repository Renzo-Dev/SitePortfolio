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

				<!-- Burger кнопка для мобильных -->
				<button
					class="header__burger"
					:class="{ 'header__burger--open': isMobileMenuOpen }"
					aria-label="Меню"
					@click="toggleMobileMenu"
				>
					<span class="header__burger-line" />
					<span class="header__burger-line" />
					<span class="header__burger-line" />
				</button>
			</div>
		</div>

		<!-- Overlay для закрытия меню -->
		<Transition name="overlay">
			<div
				v-if="isMobileMenuOpen"
				class="header__overlay"
				@click="closeMobileMenu"
			/>
		</Transition>

		<!-- Мобильное меню -->
		<nav v-if="isMobileMenuOpen" ref="menuElement" class="header__mobile-menu">
			<div class="header__mobile-content">
				<!-- Навигационные ссылки -->
				<div class="header__mobile-links">
					<a
						v-for="(link, index) in navLinks"
						:key="link.id"
						:href="link.href"
						class="header__mobile-link"
						:style="{ '--item-index': index }"
						@click.prevent="handleMobileNavClick(link.id)"
					>
						<span class="header__mobile-link-icon">
							<Icon :name="getLinkIcon(link.id)" size="24" />
						</span>
						<span class="header__mobile-link-text">{{ link.label }}</span>
						<Icon
							name="ph:caret-right"
							size="20"
							class="header__mobile-link-arrow"
						/>
					</a>
				</div>

				<!-- CTA кнопка в меню -->
				<Button
					variant="primary"
					class="header__mobile-cta"
					@click="handleMobileNavClick('contact')"
				>
					Связаться со мной
				</Button>
			</div>
		</nav>
	</header>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue'

// Отслеживание скролла
const { isScrolled } = useHeaderScroll(100)

// Мобильное меню
const {
	isMobileMenuOpen,
	isClosing,
	toggleMobileMenu,
	closeMobileMenu,
	unlockScroll,
	menuElement,
} = useMobileMenu()

// Навигация
const { navLinks, navigateToSection } = useNavigation()

// Обработчик клика по навигации (desktop)
const handleNavClick = (id: string) => {
	navigateToSection(id, -80)
}

// Обработчик клика по навигации (mobile)
const handleMobileNavClick = (id: string) => {
	// Закрываем меню
	closeMobileMenu()

	// Разблокируем скролл через 100ms (меню начало закрываться)
	setTimeout(() => {
		unlockScroll()
	}, 100)

	// Начинаем скролл через 400ms (меню почти закрылось)
	setTimeout(() => {
		navigateToSection(id, -80)
	}, 400)
}

// Скролл к контактам
const scrollToContact = () => {
	navigateToSection('contact', -80)
}

// Иконки для пунктов меню
const getLinkIcon = (id: string) => {
	const icons: Record<string, string> = {
		about: 'ph:user-circle-duotone',
		credentials: 'ph:certificate-duotone',
		portfolio: 'ph:briefcase-duotone',
		services: 'ph:rocket-duotone',
		contact: 'ph:envelope-duotone',
	}
	return icons[id] || 'ph:circle-duotone'
}
</script>

<style scoped lang="scss">
@use '~/assets/styles/components/header';
</style>
