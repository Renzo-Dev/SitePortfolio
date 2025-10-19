<template>
	<section class="testimonials section">
		<div class="container">
			<h2 class="testimonials__title text-center">
				<Icon name="ph:quotes-duotone" size="32" />
				Отзывы клиентов
			</h2>
			<p class="testimonials__subtitle text-center text-secondary">
				Реальные результаты и впечатления от совместной работы
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
		text: 'Данил полностью переделал фронт и инфраструктуру нашей медицинской библиотеки. Врачи теперь находят нужные публикации за секунды, даже на телефонах во время конференций. Мобильный трафик вырос в 4 раза!',
		author: 'Алексей Соколов',
		role: 'Руководитель digital-направления',
		company: 'Kremlin Neurology',
	},
	{
		text: 'До работы с Данилом наши пользователи ждали результаты поиска по 3 секунды — многие просто уходили. Он внедрил Redis и оптимизировал базу. Теперь всё работает мгновенно, конверсия выросла на 34%. Рекомендую!',
		author: 'Мария Петрова',
		role: 'Product Owner',
		company: 'HouseSeeker',
	},
	{
		text: 'Данил настроил нам полноценный CI/CD с Docker за неделю. Раньше каждый деплой был лотереей и отнимал 3 часа. Теперь обновления выкатываются автоматически за 8 минут, ошибок почти нет. Освободилась куча времени на разработку.',
		author: 'Дмитрий Волков',
		role: 'Tech Lead',
		company: 'Startup Team',
	},
	{
		text: 'Наш API падал от нагрузки при генерации отчётов. Данил вынес тяжёлые задачи в RabbitMQ очереди — и всё заработало как часы. Таймауты исчезли, пользователи довольны. Профессионал своего дела.',
		author: 'Игорь Кузнецов',
		role: 'Backend Team Lead',
		company: 'FinTech Company',
	},
]

// Scroll reveal
// Без анимаций
</script>

<style scoped lang="scss">
@use '~/assets/styles/components/testimonials-section';
</style>
