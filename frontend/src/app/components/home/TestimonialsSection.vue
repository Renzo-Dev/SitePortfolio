<template>
	<section class="testimonials section">
		<div class="container">
			<h2 class="testimonials__title text-center">
				<Icon name="ph:quotes-duotone" size="32" />
				Отзывы
			</h2>
			<p class="testimonials__subtitle text-center text-secondary">
				Что говорят о работе со мной
			</p>

			<div class="testimonials__grid">
				<div
					v-for="(testimonial, index) in testimonials"
					:key="index"
					class="testimonial-card"
				>
					<div class="testimonial-card__quote">
						<Icon name="mdi:format-quote-open" size="48" />
					</div>
					<p class="testimonial-card__text">{{ testimonial.text }}</p>
					<div class="testimonial-card__author">
						<div class="testimonial-card__author-name">
							{{ testimonial.author }}
						</div>
						<div class="testimonial-card__author-role">
							{{ testimonial.role }} —
							<span class="testimonial-card__author-company">{{
								testimonial.company
							}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const testimonials = [
	{
		text: 'Без переработки фронта и инфраструктуры нам бы не поднять цифровые сервисы клиники. Дан выстроил всё, что нужно.',
		author: 'Head of Digital',
		role: '',
		company: 'Kremlin Neurology',
	},
	{
		text: 'Автоматизация HouseSeeker невозможна без архитектуры Дана — уведомления теперь уходят за минуты.',
		author: 'Product Owner',
		role: '',
		company: 'HouseSeeker',
	},
]

// Scroll reveal
// Без анимаций
</script>

<style scoped lang="scss">
@use '~/assets/styles/components/testimonials-section';
</style>
