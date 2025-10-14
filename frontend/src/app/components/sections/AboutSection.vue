<template>
	<section id="about" class="section">
		<div class="container">
			<h2 class="section-title">Обо мне</h2>

			<div class="about">
				<!-- Фото (опционально) -->
				<div class="about__photo">
					<div class="about__photo-placeholder">
						<Icon name="heroicons:user-circle" />
					</div>
				</div>

				<!-- Текстовый блок -->
				<div class="about__content">
					<p class="about__text">
						Я — разработчик полного стека с опытом более
						<strong>3 лет коммерческой разработки</strong>. Люблю продумывать
						архитектуру и создавать чистый, поддерживаемый код.
					</p>

					<!-- Сильные стороны -->
					<div class="about__strengths">
						<h3 class="about__subtitle">💡 Мои сильные стороны:</h3>
						<ul class="about__list">
							<li v-for="strength in strengths" :key="strength">
								<Icon name="heroicons:check-circle" class="about__icon" />
								<span>{{ strength }}</span>
							</li>
						</ul>
					</div>

					<!-- Технологии -->
					<div class="about__technologies">
						<h3 class="about__subtitle">🧠 Технологии:</h3>
						<div class="about__tags">
							<BaseTag
								v-for="tech in technologies"
								:key="tech.name"
								:category="tech.category"
								variant="filled"
							>
								{{ tech.name }}
							</BaseTag>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
// Сильные стороны
const strengths = [
	'Системный подход к проектам',
	'Внимание к деталям',
	'Оптимизация производительности',
	'Умение работать как с фронтендом, так и с бэкендом',
]

// Технологии
const technologies = [
	{ name: 'Vue 3', category: 'frontend' },
	{ name: 'Nuxt 4', category: 'frontend' },
	{ name: 'TypeScript', category: 'frontend' },
	{ name: 'Pinia', category: 'frontend' },
	{ name: 'Laravel', category: 'backend' },
	{ name: 'PHP', category: 'backend' },
	{ name: 'MySQL', category: 'backend' },
	{ name: 'Redis', category: 'backend' },
	{ name: 'Docker', category: 'devops' },
	{ name: 'Nginx', category: 'devops' },
	{ name: 'Git', category: 'devops' },
]
</script>

<style lang="scss" scoped>
.about {
	display: grid;
	grid-template-columns: 1fr;
	gap: $space-12;
	align-items: center;

	@include respond-to('lg') {
		grid-template-columns: 1fr 2fr;
		gap: $space-16;
	}

	// Фото
	&__photo {
		display: flex;
		justify-content: center;
	}

	&__photo-placeholder {
		width: 240px;
		height: 240px;
		border-radius: 50%;
		background: linear-gradient(
			135deg,
			rgba($primary, 0.1),
			rgba($secondary, 0.1)
		);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 120px;
		color: $primary;
		@include card-shadow('lg');

		@include respond-to('md') {
			width: 300px;
			height: 300px;
			font-size: 150px;
		}
	}

	// Контент
	&__content {
		display: flex;
		flex-direction: column;
		gap: $space-8;
	}

	&__text {
		font-size: $text-lg;
		line-height: 1.7;
		color: $dark;

		strong {
			color: $primary;
		}
	}

	&__subtitle {
		margin-bottom: $space-4;
		font-size: $text-xl;
		color: $dark;
	}

	// Сильные стороны
	&__strengths {
		margin-top: $space-4;
	}

	&__list {
		display: flex;
		flex-direction: column;
		gap: $space-3;

		li {
			display: flex;
			align-items: center;
			gap: $space-3;
			font-size: $text-base;
			color: $dark;
		}
	}

	&__icon {
		font-size: 24px;
		color: $secondary;
		flex-shrink: 0;
	}

	// Технологии
	&__technologies {
		margin-top: $space-4;
	}

	&__tags {
		display: flex;
		flex-wrap: wrap;
		gap: $space-2;
	}
}
</style>
