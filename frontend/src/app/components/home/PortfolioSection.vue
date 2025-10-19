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

			<!-- Компактный список проектов -->
			<div class="portfolio__list">
				<div
					v-for="project in projects"
					:key="project.id"
					class="portfolio__item"
					:class="{ 'portfolio__item--active': activeProject === project.id }"
				>
					<!-- Заголовок проекта (всегда виден) -->
					<button
						class="portfolio__header"
						:class="{ 'portfolio__header--external': project.link }"
						@click="toggleProject(project.id)"
					>
						<div class="portfolio__header-left">
							<Icon
								name="ph:folder-duotone"
								size="24"
								class="portfolio__icon"
							/>
							<h3 class="portfolio__item-title">{{ project.title }}</h3>
						</div>
						<div class="portfolio__header-right">
							<a
								v-if="project.link"
								:href="project.link"
								target="_blank"
								rel="noopener noreferrer"
								class="portfolio__external-link"
								@click.stop
							>
								<Icon name="ph:arrow-square-out-duotone" size="20" />
							</a>
							<Icon
								:name="
									activeProject === project.id
										? 'ph:caret-up-bold'
										: 'ph:caret-down-bold'
								"
								size="20"
								class="portfolio__chevron"
							/>
						</div>
					</button>

					<!-- Содержимое проекта (раскрывается) -->
					<transition name="accordion">
						<div v-show="activeProject === project.id" class="portfolio__content">
							<!-- Изображение проекта -->
							<div class="portfolio__image-wrapper">
								<img
									:src="project.image"
									:alt="project.title"
									class="portfolio__image"
									loading="lazy"
								>
							</div>

							<!-- Описание -->
							<p class="portfolio__description">{{ project.description }}</p>

							<!-- Роль -->
							<div class="portfolio__meta">
								<Icon name="ph:user-duotone" size="18" />
								<span>{{ project.role }}</span>
							</div>

							<!-- Технологии -->
							<div class="portfolio__technologies">
								<Badge
									v-for="tech in project.technologies"
									:key="tech"
									variant="secondary"
								>
									{{ tech }}
								</Badge>
							</div>
						</div>
					</transition>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import Badge from '~/components/ui/Badge.vue'

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

// Активный проект (по умолчанию первый)
const activeProject = ref<number | null>(1)

// Переключение проекта
const toggleProject = (projectId: number) => {
	if (activeProject.value === projectId) {
		activeProject.value = null // Закрываем, если уже открыт
	} else {
		activeProject.value = projectId // Открываем новый
	}
}
</script>

<style scoped lang="scss">
@use '~/assets/styles/components/portfolio-section';
</style>
