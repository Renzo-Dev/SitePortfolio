<template>
	<section class="about section" id="about">
		<div class="container">
			<div class="about__grid">
				<!-- Левая часть - фото -->
				<div class="about__image-wrapper">
					<NuxtImg
						src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=800&fit=crop"
						alt="Dan Koshevoy"
						class="about__image"
						loading="lazy"
					/>
				</div>

				<!-- Правая часть - контент -->
				<div class="about__content">
					<h2 class="about__title">
						<Icon name="ph:user-circle-duotone" size="32" />
						Обо мне
					</h2>
					<p class="about__text">
						Я — разработчик полного стека с опытом более
						<strong>3 лет коммерческой разработки</strong>. Люблю продумывать
						архитектуру и создавать чистый, поддерживаемый код.
					</p>

					<!-- Сильные стороны -->
					<div class="about__strengths">
						<h3 class="about__subtitle">
							<Icon name="ph:star-duotone" size="24" />
							Мои сильные стороны
						</h3>
						<ul class="about__list">
							<li
								v-for="(strength, index) in strengths"
								:key="index"
								class="about__list-item"
							>
								<Icon :name="strength.icon" size="20" />
								<span>{{ strength.text }}</span>
							</li>
						</ul>
					</div>

					<!-- Технологии бегущей строкой -->
					<div class="about__tech">
						<h3 class="about__subtitle">
							<Icon name="ph:code-duotone" size="24" />
							Технологии
						</h3>
						<div class="about__tech-marquee">
							<div class="about__tech-track">
								<Badge
									v-for="(tech, index) in [...technologies, ...technologies]"
									:key="index"
								>
									{{ tech }}
								</Badge>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import Badge from '~/components/ui/Badge.vue'

const strengths = [
	{ icon: 'ph:strategy-duotone', text: 'Системный подход к проектам' },
	{ icon: 'ph:magnifying-glass-duotone', text: 'Внимание к деталям' },
	{ icon: 'ph:gauge-duotone', text: 'Оптимизация производительности' },
	{
		icon: 'ph:stack-duotone',
		text: 'Умение работать как с фронтендом, так и с бэкендом',
	},
]

const technologies = [
	'Vue 3',
	'Nuxt 4',
	'Laravel',
	'TypeScript',
	'Docker',
	'Redis',
	'MySQL',
	'Nginx',
	'TailwindCSS',
	'Pinia',
]

// Без анимаций - статичный контент
</script>

<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

.about {
	&__grid {
		display: grid;
		grid-template-columns: 40% 60%;
		gap: $spacing-3xl;
		align-items: center;

		@include tablet {
			grid-template-columns: 1fr;
			gap: $spacing-2xl;
		}
	}

	&__image-wrapper {
		position: relative;
		border-radius: $radius-lg;
		overflow: hidden;
		aspect-ratio: 3/4;

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			background: linear-gradient(
				180deg,
				transparent 0%,
				rgba(10, 10, 10, 0.5) 100%
			);
			pointer-events: none;
		}
	}

	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: grayscale(100%);
		transition: all $transition-slow;

		&:hover {
			filter: grayscale(0%);
			transform: scale(1.05);
		}
	}

	&__content {
		display: flex;
		flex-direction: column;
		gap: $spacing-lg;
	}

	&__title {
		font-size: $text-h2;
		margin-bottom: $spacing-md;
	}

	&__text {
		color: $text-secondary;
		line-height: $line-body;

		strong {
			color: $text-primary;
			font-weight: 600;
		}
	}

	&__subtitle {
		font-size: $text-h4;
		margin-bottom: $spacing-md;
	}

	&__strengths {
		margin-top: $spacing-md;
	}

	&__list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: $spacing-md;
	}

	&__list-item {
		display: flex;
		align-items: center;
		gap: $spacing-sm;
		color: $text-secondary;
		transition: all $transition-base;

		&:hover {
			color: $text-primary;
			transform: translateX(8px);

			:deep(svg) {
				transform: rotate(5deg) scale(1.1);
			}
		}

		:deep(svg) {
			color: $accent;
			transition: all $transition-base;
		}
	}

	&__tech {
		margin-top: $spacing-lg;
	}

	&__tech-marquee {
		overflow: hidden;
		margin-top: $spacing-md;
	}

	&__tech-track {
		display: flex;
		gap: $spacing-sm;
		width: fit-content;
	}
}
</style>
