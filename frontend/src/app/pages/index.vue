<template>
	<div class="home">
		<!-- Hero Section -->
		<HeroSection />

		<!-- Section Divider -->
		<div class="section-divider"></div>

		<!-- About Section -->
		<AboutSection />

		<!-- Section Divider -->
		<div class="section-divider"></div>

		<!-- Credentials Section -->
		<CredentialsSection />

		<!-- Section Divider -->
		<div class="section-divider"></div>

		<!-- Services Section -->
		<ServicesSection />

		<!-- Section Divider -->
		<div class="section-divider"></div>

		<!-- Portfolio Section -->
		<PortfolioSection />

		<!-- Section Divider -->
		<div class="section-divider"></div>

		<!-- Case Studies Section -->
		<CaseStudiesSection />

		<!-- Section Divider -->
		<div class="section-divider"></div>

		<!-- Contact Section -->
		<ContactSection />
	</div>
</template>

<script setup lang="ts">
import AboutSection from '~/components/home/AboutSection.vue'
import CaseStudiesSection from '~/components/home/CaseStudiesSection.vue'
import ContactSection from '~/components/home/ContactSection.vue'
import CredentialsSection from '~/components/home/CredentialsSection.vue'
import HeroSection from '~/components/home/HeroSection.vue'
import PortfolioSection from '~/components/home/PortfolioSection.vue'
import ServicesSection from '~/components/home/ServicesSection.vue'

// SEO метаданные
useHead({
	title: 'Dan Koshevoy - Full Stack разработчик',
	meta: [
		{
			name: 'description',
			content:
				'Создаю современные сайты и веб-приложения. Frontend + Backend разработка на Vue, Laravel, Docker.',
		},
	],
})
</script>

<style scoped lang="scss">
.home {
	width: 100%;
}
</style>
