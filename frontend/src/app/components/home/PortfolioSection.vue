<template>
	<section class="portfolio section" id="portfolio">
		<div class="container">
			<h2 class="portfolio__title text-center">
				<Icon name="ph:briefcase-duotone" size="32" />
				Портфолио
			</h2>
			<p class="portfolio__subtitle text-center text-secondary">
				Реализованные проекты и коммерческий опыт
			</p>

			<div class="portfolio__grid grid grid--3">
				<ProjectCard
					v-for="(project, index) in projects"
					:key="index"
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
		title: 'HouseSeeker',
		description:
			'Микросервисная платформа для мониторинга аренды жилья с автоматическими уведомлениями',
		technologies: ['Laravel', 'Node.js', 'Docker', 'Nginx', 'RabbitMQ'],
		role: 'Архитектура, Backend, DevOps',
		image: '/HouseSeeker.jpg',
	},
	{
		title: 'Kremlin Neurology',
		description:
			'Веб-платформа для клиницистов и пациентов в сфере неврологии с интеграцией систем',
		technologies: ['Vue 3', 'SCSS', 'PHP', 'Docker', 'MySQL'],
		role: 'Fullstack разработка, автоматизация процессов',
		image:
			'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
	},
	{
		title: 'Marketplace Platform',
		description:
			'Мультисервисная торговая платформа с микросервисной архитектурой',
		technologies: ['Vue 3', 'TypeScript', 'Laravel', 'RabbitMQ', 'Redis'],
		role: 'Full-stack разработка и поддержка',
		image:
			'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
	},
]

// Без анимаций - сразу показываем карточки
</script>

<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

.portfolio {
	&__title {
		font-size: $text-h2;
		margin-bottom: $spacing-md;
	}

	&__subtitle {
		margin-bottom: $spacing-3xl;
		font-size: $text-body-lg;
	}

	&__grid {
		margin-top: $spacing-2xl;
	}
}
</style>
