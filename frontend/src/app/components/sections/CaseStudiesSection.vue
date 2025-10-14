<template>
	<section class="section" style="background-color: #f8fafc">
		<div class="container">
			<h2 class="section-title">Личные кейсы</h2>
			<p class="section-subtitle">Реальный опыт решения проблем</p>

			<!-- Кейсы -->
			<div class="cases">
				<BaseCard
					v-for="(caseItem, index) in cases"
					:key="caseItem.title"
					variant="elevated"
				>
					<div class="case">
						<!-- Заголовок -->
						<button class="case__header" @click="toggleCase(index)">
							<h3 class="case__title">{{ caseItem.title }}</h3>
							<Icon
								:name="
									expandedCases.includes(index)
										? 'heroicons:chevron-up'
										: 'heroicons:chevron-down'
								"
								class="case__icon"
							/>
						</button>

						<!-- Контент (expandable) -->
						<Transition name="case-content">
							<div v-if="expandedCases.includes(index)" class="case__content">
								<div class="case__section">
									<strong>Проблема:</strong>
									<p>{{ caseItem.problem }}</p>
								</div>

								<div class="case__section">
									<strong>Решение:</strong>
									<p>{{ caseItem.solution }}</p>
								</div>

								<div class="case__section">
									<strong>Результат:</strong>
									<p>{{ caseItem.result }}</p>
								</div>

								<div class="case__section case__section--highlight">
									<strong>Вывод:</strong>
									<p>{{ caseItem.conclusion }}</p>
								</div>
							</div>
						</Transition>
					</div>
				</BaseCard>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
// Кейсы
const cases = [
	{
		title: '⚙️ Как я ускорил API в 3 раза с помощью кеширования в Redis',
		problem: 'Медленная выдача данных при множественных запросах.',
		solution: 'Внедрение уровня кеша и TTL по ключам.',
		result: 'Время ответа снизилось с 900 мс до 280 мс.',
		conclusion: 'Кеширование должно быть частью архитектуры с самого начала.',
	},
	{
		title: '🧩 Как переписал Vue 2 проект на Vue 3 без боли',
		problem: 'Проект на устаревшем Vue 2 и Options API.',
		solution: 'Постепенная миграция компонентов и переход на Composition API.',
		result: 'Стабильность, читаемость и улучшенная реактивность.',
		conclusion: 'Миграция проще, если начинать с изоляции модулей.',
	},
	{
		title: '🔄 Опыт с Docker и CI/CD',
		problem: 'Ручной деплой и частые ошибки при обновлениях.',
		solution: 'Создание пайплайна GitLab → Docker → Nginx.',
		result: 'Автоматический деплой и меньше ошибок при обновлениях.',
		conclusion: 'DevOps должен быть частью разработки, а не постфактум.',
	},
]

// Состояние раскрытых кейсов
const expandedCases = ref<number[]>([])

// Переключение кейса
const toggleCase = (index: number) => {
	const caseIndex = expandedCases.value.indexOf(index)
	if (caseIndex > -1) {
		expandedCases.value.splice(caseIndex, 1)
	} else {
		expandedCases.value.push(index)
	}
}
</script>

<style lang="scss" scoped>
.cases {
	display: flex;
	flex-direction: column;
	gap: $space-6;
	max-width: 900px;
	margin: 0 auto;
}

.case {
	// Заголовок
	&__header {
		@include reset-button;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: $space-4;
		width: 100%;
		text-align: left;
		@include transition(all);

		&:hover {
			color: $primary;
		}
	}

	&__title {
		font-size: $text-lg;
		font-weight: 600;
		color: inherit;
		margin: 0;

		@include respond-to('md') {
			font-size: $text-xl;
		}
	}

	&__icon {
		font-size: 24px;
		color: $primary;
		flex-shrink: 0;
		@include transition(transform);
	}

	// Контент
	&__content {
		margin-top: $space-6;
		padding-top: $space-6;
		border-top: 2px solid $light;
		display: flex;
		flex-direction: column;
		gap: $space-4;
	}

	&__section {
		strong {
			display: block;
			color: $primary;
			margin-bottom: $space-2;
			font-size: $text-base;
		}

		p {
			color: $dark;
			font-size: $text-base;
			line-height: 1.6;
			margin: 0;
		}

		&--highlight {
			background-color: rgba($secondary, 0.05);
			padding: $space-4;
			border-radius: $rounded-md;
			border-left: 4px solid $secondary;
		}
	}
}

// Анимация контента
.case-content-enter-active,
.case-content-leave-active {
	transition: all 0.3s ease;
}

.case-content-enter-from,
.case-content-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
