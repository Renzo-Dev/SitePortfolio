<template>
	<article
		class="project-card"
		@mouseenter="handleMouseEnter"
		@mouseleave="handleMouseLeave"
	>
		<div class="project-card__image-wrapper">
			<img
				:src="project.image"
				:alt="project.title"
				class="project-card__image project-img"
				loading="lazy"
			/>
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
	</article>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import Badge from '~/components/ui/Badge.vue'

interface Project {
	title: string
	description: string
	technologies: string[]
	role: string
	image: string
}

const props = defineProps<{
	project: Project
}>()

const handleMouseEnter = (e: MouseEvent) => {
	const card = e.currentTarget as HTMLElement

	gsap.to(card, {
		y: -12,
		scale: 1.02,
		duration: 0.4,
		ease: 'power2.out',
	})

	const img = card.querySelector('.project-img')
	if (img) {
		gsap.to(img, {
			scale: 1.1,
			duration: 0.6,
			ease: 'power2.out',
		})
	}

	gsap.to(card, {
		borderColor: 'rgba(255,255,255,0.3)',
		boxShadow: '0 20px 60px rgba(255,255,255,0.1)',
		duration: 0.3,
	})
}

const handleMouseLeave = (e: MouseEvent) => {
	const card = e.currentTarget as HTMLElement

	gsap.to(card, {
		y: 0,
		scale: 1,
		borderColor: 'rgba(42,42,42,1)',
		boxShadow: 'none',
		duration: 0.4,
		ease: 'power2.inOut',
	})

	const img = card.querySelector('.project-img')
	if (img) {
		gsap.to(img, {
			scale: 1,
			duration: 0.6,
			ease: 'power2.inOut',
		})
	}
}
</script>

<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

.project-card {
	background: $bg-card;
	border: 1px solid $border;
	border-radius: $radius-lg;
	overflow: hidden;
	transition: all $transition-base;
	cursor: pointer;

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
