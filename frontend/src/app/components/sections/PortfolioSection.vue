<template>
	<section id="portfolio" class="section">
		<div class="container">
			<h2 class="section-title">Портфолио</h2>
			<p class="section-subtitle">Проекты, которыми я горжусь</p>

			<!-- Список проектов -->
			<div class="portfolio">
				<BaseCard
					v-for="project in projects"
					:key="project.title"
					variant="elevated"
					hoverable
				>
					<div class="project">
						<!-- Превью (опционально) -->
						<div class="project__preview">
							<Icon :name="project.icon" />
						</div>

						<!-- Контент -->
						<div class="project__content">
							<!-- Заголовок -->
							<h3 class="project__title">{{ project.title }}</h3>

							<!-- Описание -->
							<p class="project__description">{{ project.description }}</p>

							<!-- Технологии -->
							<div class="project__technologies">
								<strong>Технологии:</strong>
								<span>{{ project.technologies }}</span>
							</div>

							<!-- Роль -->
							<div class="project__role">
								<strong>Роль:</strong>
								<span>{{ project.role }}</span>
							</div>

							<!-- Теги -->
							<div class="project__tags">
								<BaseTag
									v-for="tag in project.tags"
									:key="tag.name"
									:category="tag.category"
									variant="filled"
								>
									{{ tag.name }}
								</BaseTag>
							</div>
						</div>
					</div>
				</BaseCard>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
// Проекты
const projects = [
	{
		title: 'HouseSeeker',
		icon: 'heroicons:home-modern',
		description: 'Микросервисная платформа для мониторинга аренды жилья.',
		technologies: 'Laravel, Node.js, Docker, Nginx',
		role: 'Архитектура, Backend, DevOps',
		tags: [
			{ name: 'Laravel', category: 'backend' },
			{ name: 'Node.js', category: 'backend' },
			{ name: 'Docker', category: 'devops' },
		],
	},
	{
		title: 'Kremlin Neurology',
		icon: 'heroicons:heart',
		description:
			'Веб-платформа для клиницистов и пациентов в сфере неврологии.',
		technologies: 'Vue, SCSS, PHP, Docker',
		role: 'Fullstack разработка, автоматизация процессов',
		tags: [
			{ name: 'Vue', category: 'frontend' },
			{ name: 'PHP', category: 'backend' },
			{ name: 'Docker', category: 'devops' },
		],
	},
	{
		title: 'Marketplace Platform',
		icon: 'heroicons:shopping-cart',
		description: 'Мультисервисная торговая платформа.',
		technologies: 'Vue 3, TypeScript, Laravel, RabbitMQ',
		role: 'Full-stack разработка и поддержка',
		tags: [
			{ name: 'Vue 3', category: 'frontend' },
			{ name: 'TypeScript', category: 'frontend' },
			{ name: 'Laravel', category: 'backend' },
		],
	},
]
</script>

<style lang="scss" scoped>
.portfolio {
	display: grid;
	grid-template-columns: 1fr;
	gap: $space-8;

	@include respond-to('lg') {
		grid-template-columns: repeat(2, 1fr);
	}

	@include respond-to('xl') {
		grid-template-columns: repeat(3, 1fr);
	}
}

.project {
	display: flex;
	flex-direction: column;
	gap: $space-6;

	// Превью
	&__preview {
		width: 100%;
		height: 200px;
		border-radius: $rounded-lg;
		background: linear-gradient(
			135deg,
			rgba($primary, 0.1),
			rgba($secondary, 0.1)
		);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 64px;
		color: $primary;
	}

	// Контент
	&__content {
		display: flex;
		flex-direction: column;
		gap: $space-3;
	}

	// Заголовок
	&__title {
		font-size: $text-2xl;
		font-weight: 600;
		color: $dark;
		margin: 0;
	}

	// Описание
	&__description {
		font-size: $text-base;
		color: $gray;
		line-height: 1.6;
		margin: 0;
	}

	// Технологии и роль
	&__technologies,
	&__role {
		font-size: $text-sm;
		color: $dark;

		strong {
			color: $primary;
			margin-right: $space-2;
		}
	}

	// Теги
	&__tags {
		display: flex;
		flex-wrap: wrap;
		gap: $space-2;
		margin-top: $space-2;
	}
}
</style>
