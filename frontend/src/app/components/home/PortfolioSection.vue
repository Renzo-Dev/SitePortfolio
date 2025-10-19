<template>
	<section id="portfolio" class="portfolio section">
		<div class="container">
			<h2 class="portfolio__title text-gradient text-center">
				<Icon name="ph:briefcase-duotone" size="32" />
				Портфолио
			</h2>
			<p class="portfolio__subtitle text-secondary text-center">
				Избранные проекты, над которыми я работал
			</p>

			<!-- Grid проектов -->
			<div class="portfolio__grid">
				<ProjectCard
					v-for="project in projects"
					:key="project.id"
					:project="project"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import ProjectCard from '~/components/portfolio/ProjectCard.vue'

const projects = [
	{
		id: 1,
		title: 'Kremlin Neurology',
		description:
			'Веб-платформа медицинской библиотеки с научными публикациями по неврологии',
		technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
		role: 'Frontend разработчик',
		image: '/images/kremlin.jpg',
		link: 'https://www.kremlin-neurology.ru/index1.html',
	},
	{
		id: 2,
		title: 'HouseSeeker',
		description:
			'Платформа для поиска и аренды недвижимости с расширенными фильтрами и системой бронирования',
		technologies: ['Vue 3', 'Laravel', 'PostgreSQL', 'Redis', 'Docker'],
		role: 'Full-stack разработчик',
		image: '/images/HouseSeeker.jpg',
	},
	{
		id: 3,
		title: 'E-commerce платформа',
		description:
			'Современный интернет-магазин с корзиной, оплатой и личным кабинетом',
		technologies: ['Vue 3', 'Laravel', 'Stripe'],
		role: 'Full-stack разработчик',
		image:
			'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
	},
	{
		id: 4,
		title: 'CRM система',
		description: 'Система управления клиентами с аналитикой и отчётами',
		technologies: ['Nuxt', 'PostgreSQL', 'Docker'],
		role: 'Backend разработчик',
		image:
			'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
	},
	{
		id: 5,
		title: 'Финтех приложение',
		description: 'Мобильное приложение для управления финансами',
		technologies: ['Vue', 'Node.js', 'MongoDB'],
		role: 'Frontend разработчик',
		image:
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
	},
]

// Без анимаций - сразу показываем карточки
</script>

<style scoped lang="scss">
@use '~/assets/styles/components/portfolio-section';
</style>
