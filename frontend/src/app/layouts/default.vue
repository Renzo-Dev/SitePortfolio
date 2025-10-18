<template>
	<div class="layout">
		<!-- Header -->
		<Header />

		<!-- Основной контент -->
		<main class="layout__main">
			<slot />
		</main>

		<!-- Footer -->
		<Footer />

		<!-- Scroll to Top кнопка -->
		<ScrollToTop />

		<!-- Noise overlay для текстуры -->
		<div class="noise-overlay" />
	</div>
</template>

<script setup lang="ts">
import Footer from '~/components/layout/Footer.vue'
import Header from '~/components/layout/Header.vue'
import ScrollToTop from '~/components/layout/ScrollToTop.vue'

// Плавный скролл через Lenis (только для desktop)
const { scrollToSection, scrollTo } = useSmoothScroll()

// Предоставляем функции скролла для дочерних компонентов
provide('scrollToSection', scrollToSection)
provide('scrollTo', scrollTo)
</script>

<style scoped lang="scss">
.layout {
	min-height: 100vh;
	display: flex;
	flex-direction: column;

	&__main {
		flex: 1;
		// Padding убран - каждая секция сама управляет отступами
	}
}
</style>
