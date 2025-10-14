<template>
	<section class="cases section" id="cases">
		<div class="container">
			<h2 class="cases__title text-center">
				<Icon name="ph:chart-line-duotone" size="32" />
				Личные кейсы
			</h2>
			<p class="cases__subtitle text-center text-secondary">
				Реальные задачи и их решения
			</p>

			<div class="cases__grid">
				<div v-for="(caseItem, index) in cases" :key="index" class="case-card">
					<div class="case-card__number">
						{{ String(index + 1).padStart(2, '0') }}
					</div>
					<h3 class="case-card__title">{{ caseItem.title }}</h3>

					<div class="case-card__content">
						<div class="case-card__row">
							<strong>Проблема:</strong>
							<p>{{ caseItem.problem }}</p>
						</div>
						<div class="case-card__row">
							<strong>Решение:</strong>
							<p>{{ caseItem.solution }}</p>
						</div>
						<div class="case-card__row">
							<strong>Результат:</strong>
							<p>{{ caseItem.result }}</p>
						</div>
						<div class="case-card__row case-card__row--highlight">
							<strong>Вывод:</strong>
							<p>{{ caseItem.takeaway }}</p>
						</div>
					</div>

					<!-- Метрики с count-up -->
					<div v-if="caseItem.metrics" class="case-card__metrics">
						<div
							v-for="(metric, mIndex) in caseItem.metrics"
							:key="mIndex"
							class="metric"
						>
							<div
								:ref="(el) => setMetricRef(el, index, mIndex)"
								class="metric__value"
							>
								{{ metric.start }}
							</div>
							<div class="metric__label">{{ metric.label }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const cases = [
	{
		title: 'Ускорение API в 3 раза с помощью кеширования в Redis',
		problem: 'Медленная выдача данных при множественных запросах',
		solution: 'Внедрение уровня кеша и TTL по ключам',
		result: 'Время ответа снизилось с 900 мс до 280 мс',
		takeaway: 'Кеширование должно быть частью архитектуры с самого начала',
		metrics: [
			{ start: 900, end: 280, label: 'Время ответа (мс)', suffix: 'ms' },
		],
	},
	{
		title: 'Переписал Vue 2 проект на Vue 3 без боли',
		problem: 'Проект на устаревшем Vue 2 и Options API',
		solution: 'Постепенная миграция компонентов и переход на Composition API',
		result: 'Стабильность, читаемость и улучшенная реактивность',
		takeaway: 'Миграция проще, если начинать с изоляции модулей',
	},
	{
		title: 'Опыт с Docker и CI/CD',
		problem: 'Ручной деплой с ошибками при обновлениях',
		solution: 'Создание пайплайна GitLab → Docker → Nginx',
		result: 'Автоматический деплой и меньше ошибок при обновлениях',
		takeaway: 'DevOps должен быть частью разработки, а не постфактум',
	},
]

// Refs для метрик
const metricRefs = ref<HTMLElement[][]>([])

const setMetricRef = (el: any, caseIndex: number, metricIndex: number) => {
	if (el) {
		if (!metricRefs.value[caseIndex]) {
			metricRefs.value[caseIndex] = []
		}
		metricRefs.value[caseIndex][metricIndex] = el
	}
}

// Count-up анимация
// Без анимаций - показываем метрики сразу
</script>

<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

.cases {
	&__title {
		font-size: $text-h2;
		margin-bottom: $spacing-md;
	}

	&__subtitle {
		margin-bottom: $spacing-3xl;
		font-size: $text-body-lg;
	}

	&__grid {
		display: flex;
		flex-direction: column;
		gap: $spacing-xl;
		margin-top: $spacing-2xl;
	}
}

.case-card {
	background: $bg-card;
	border: 1px solid $border;
	border-radius: $radius-lg;
	padding: $spacing-xl;
	position: relative;

	&__number {
		position: absolute;
		top: $spacing-lg;
		right: $spacing-lg;
		font-size: 48px;
		font-weight: 800;
		color: rgba(255, 255, 255, 0.05);
		line-height: 1;
	}

	&__title {
		font-size: $text-h3;
		margin-bottom: $spacing-lg;
		max-width: 80%;

		@include mobile {
			max-width: 100%;
		}
	}

	&__content {
		display: flex;
		flex-direction: column;
		gap: $spacing-md;
	}

	&__row {
		display: flex;
		flex-direction: column;
		gap: $spacing-xs;

		strong {
			color: $accent;
			font-size: $text-body-sm;
			text-transform: uppercase;
			letter-spacing: 1px;
		}

		p {
			color: $text-secondary;
		}

		&--highlight {
			margin-top: $spacing-sm;
			padding: $spacing-md;
			background: rgba(255, 255, 255, 0.03);
			border-radius: $radius-sm;
			border-left: 3px solid $accent;

			p {
				color: $text-primary;
				font-weight: 500;
			}
		}
	}

	&__metrics {
		display: flex;
		gap: $spacing-xl;
		margin-top: $spacing-lg;
		padding-top: $spacing-lg;
		border-top: 1px solid $border;

		@include mobile {
			flex-direction: column;
			gap: $spacing-md;
		}
	}
}

.metric {
	display: flex;
	flex-direction: column;
	gap: $spacing-xs;

	&__value {
		font-size: 36px;
		font-weight: 700;
		color: $success;
		font-variant-numeric: tabular-nums;
	}

	&__label {
		font-size: $text-body-sm;
		color: $text-muted;
	}
}
</style>
