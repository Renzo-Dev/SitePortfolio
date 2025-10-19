<template>
	<component
		:is="project.link ? 'a' : 'article'"
		:href="project.link"
		:target="project.link ? '_blank' : undefined"
		:rel="project.link ? 'noopener noreferrer' : undefined"
		class="project-card"
	>
		<div class="project-card__image-wrapper">
			<img
				:src="project.image"
				:alt="project.title"
				class="project-card__image project-img"
				loading="lazy"
			/>
			<!-- Индикатор внешней ссылки -->
			<div v-if="project.link" class="project-card__link-icon">
				<Icon name="ph:arrow-up-right" size="20" />
			</div>
		</div>

		<div class="project-card__content">
			<h3 class="project-card__title">{{ project.title }}</h3>
			<p class="project-card__description">{{ project.description }}</p>

			<div class="project-card__tech">
				<Badge v-for="(tech, index) in project.technologies" :key="index">
					{{ tech }}
				</Badge>
			</div>

			<div class="project-card__role">
				<strong>Роль:</strong> {{ project.role }}
			</div>
		</div>
	</component>
</template>

<script setup lang="ts">
import Badge from '~/components/ui/Badge.vue'

interface Project {
	title: string
	description: string
	technologies: string[]
	role: string
	image: string
	link?: string // Опциональная ссылка на проект
}

const props = defineProps<{
	project: Project
}>()
</script>

<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

.project-card {
	background: $bg-card;
	border: 1px solid $border;
	border-radius: $radius-lg;
	overflow: hidden;
	transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	cursor: pointer;
	will-change: transform;
	display: block;
	text-decoration: none;
	color: inherit;

	// Hover эффекты
	&:hover {
		transform: translateY(-12px) scale(1.02);
		border-color: rgba(255, 255, 255, 0.3);
		box-shadow: 0 20px 60px rgba(255, 255, 255, 0.1),
			0 10px 30px rgba(0, 0, 0, 0.3);

		.project-card__image {
			transform: scale(1.1);
		}
	}

	&:active {
		transform: translateY(-8px) scale(1.01);
	}

	&__image-wrapper {
		position: relative;
		width: 100%;
		aspect-ratio: 16/9;
		overflow: hidden;
		background: $bg-secondary;
	}

	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
		will-change: transform;
	}

	&__link-icon {
		position: absolute;
		top: $spacing-md;
		right: $spacing-md;
		width: 40px;
		height: 40px;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		border-radius: $radius-md;
		display: flex;
		align-items: center;
		justify-content: center;
		color: $text-primary;
		transition: all 0.3s ease;
		opacity: 0.7;

		.project-card:hover & {
			background: rgba(255, 255, 255, 0.25);
			transform: translateX(4px) translateY(-4px);
			opacity: 1;
		}
	}

	&__content {
		padding: $spacing-xl;
		display: flex;
		flex-direction: column;
		gap: $spacing-md;
	}

	&__title {
		font-size: $text-h3;
	}

	&__description {
		color: $text-secondary;
		line-height: $line-body;
	}

	&__tech {
		display: flex;
		flex-wrap: wrap;
		gap: $spacing-sm;
		margin-top: $spacing-sm;
	}

	&__role {
		color: $text-secondary;
		font-size: $text-body-sm;
		margin-top: $spacing-sm;
		padding-top: $spacing-sm;
		border-top: 1px solid $border;

		strong {
			color: $text-primary;
		}
	}
}
</style>
