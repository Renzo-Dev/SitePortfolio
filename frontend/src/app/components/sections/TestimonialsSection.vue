<template>
	<section class="section">
		<div class="container">
			<h2 class="section-title">Отзывы</h2>
			<p class="section-subtitle">Что говорят клиенты</p>

			<!-- Slider -->
			<div class="testimonials">
				<button
					class="testimonials__arrow testimonials__arrow--left"
					@click="prevTestimonial"
				>
					<Icon name="heroicons:chevron-left" />
				</button>

				<!-- Текущий отзыв -->
				<Transition name="testimonial" mode="out-in">
					<BaseCard :key="currentIndex" variant="elevated" class="testimonial">
						<div class="testimonial__content">
							<!-- Цитата -->
							<Icon
								name="heroicons:chat-bubble-left-right"
								class="testimonial__quote-icon"
							/>
							<blockquote class="testimonial__text">
								"{{ testimonials[currentIndex].text }}"
							</blockquote>

							<!-- Автор -->
							<div class="testimonial__author">
								<p class="testimonial__name">
									{{ testimonials[currentIndex].author }}
								</p>
								<p class="testimonial__position">
									{{ testimonials[currentIndex].position }} —
									<strong>{{ testimonials[currentIndex].company }}</strong>
								</p>
							</div>
						</div>
					</BaseCard>
				</Transition>

				<button
					class="testimonials__arrow testimonials__arrow--right"
					@click="nextTestimonial"
				>
					<Icon name="heroicons:chevron-right" />
				</button>
			</div>

			<!-- Индикаторы -->
			<div class="testimonials__indicators">
				<button
					v-for="(_, index) in testimonials"
					:key="index"
					:class="[
						'testimonials__indicator',
						{ 'is-active': index === currentIndex },
					]"
					@click="goToTestimonial(index)"
				></button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
// Отзывы
const testimonials = [
	{
		text: 'Без переработки фронта и инфраструктуры нам бы не поднять цифровые сервисы клиники. Дан выстроил всё, что нужно.',
		author: 'Алексей Петров',
		position: 'Head of Digital',
		company: 'Kremlin Neurology',
	},
	{
		text: 'Автоматизация HouseSeeker невозможна без архитектуры Дана — уведомления теперь уходят за минуты.',
		author: 'Мария Смирнова',
		position: 'Product Owner',
		company: 'HouseSeeker',
	},
]

// Текущий индекс
const currentIndex = ref(0)

// Навигация
const nextTestimonial = () => {
	currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevTestimonial = () => {
	currentIndex.value =
		(currentIndex.value - 1 + testimonials.length) % testimonials.length
}

const goToTestimonial = (index: number) => {
	currentIndex.value = index
}

// Автоплей (опционально)
let autoplayInterval: NodeJS.Timeout | null = null

onMounted(() => {
	// Автоплей каждые 5 секунд
	autoplayInterval = setInterval(() => {
		nextTestimonial()
	}, 5000)
})

onUnmounted(() => {
	if (autoplayInterval) {
		clearInterval(autoplayInterval)
	}
})
</script>

<style lang="scss" scoped>
.testimonials {
	display: flex;
	align-items: center;
	gap: $space-6;
	max-width: 900px;
	margin: 0 auto $space-8;

	// Стрелки
	&__arrow {
		@include reset-button;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background-color: $light;
		color: $primary;
		font-size: 24px;
		@include transition(all);
		flex-shrink: 0;

		&:hover {
			background-color: $primary;
			color: $white;
			transform: scale(1.1);
		}

		&--left,
		&--right {
			@include hide-on('md');
		}

		@include respond-to('md') {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	// Индикаторы
	&__indicators {
		display: flex;
		justify-content: center;
		gap: $space-3;
	}

	&__indicator {
		@include reset-button;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: $light;
		@include transition(all);

		&:hover {
			background-color: rgba($primary, 0.5);
			transform: scale(1.2);
		}

		&.is-active {
			background-color: $primary;
			width: 32px;
			border-radius: $rounded-full;
		}
	}
}

.testimonial {
	flex: 1;

	&__content {
		display: flex;
		flex-direction: column;
		gap: $space-6;
		text-align: center;
	}

	&__quote-icon {
		font-size: 48px;
		color: rgba($primary, 0.2);
		margin: 0 auto;
	}

	&__text {
		font-size: $text-lg;
		font-style: italic;
		color: $dark;
		line-height: 1.7;
		margin: 0;

		@include respond-to('md') {
			font-size: $text-xl;
		}
	}

	&__author {
		margin-top: $space-4;
	}

	&__name {
		font-size: $text-lg;
		font-weight: 600;
		color: $dark;
		margin: 0 0 $space-1 0;
	}

	&__position {
		font-size: $text-sm;
		color: $gray;
		margin: 0;

		strong {
			color: $primary;
		}
	}
}

// Анимация смены отзыва
.testimonial-enter-active,
.testimonial-leave-active {
	transition: all 0.4s ease;
}

.testimonial-enter-from {
	opacity: 0;
	transform: translateX(30px);
}

.testimonial-leave-to {
	opacity: 0;
	transform: translateX(-30px);
}
</style>
