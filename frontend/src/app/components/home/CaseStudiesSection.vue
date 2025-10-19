<template>
	<section id="cases" class="cases section">
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
								:ref="(el) => setMetricRef(el as HTMLElement | null, index, mIndex)"
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
		title: 'HouseSeeker: Ускорил поиск недвижимости в 4 раза',
		problem:
			'Пользователи ждали до 3 секунд при фильтрации объектов из-за сложных запросов к PostgreSQL с множеством JOIN',
		solution:
			'Внедрил Redis для кеширования популярных фильтров, оптимизировал SQL-запросы и добавил составные индексы',
		result:
			'Время загрузки результатов поиска сократилось с 3200 мс до 780 мс. Конверсия в просмотры выросла на 34%',
		takeaway:
			'Производительность напрямую влияет на поведение пользователей — каждая секунда ожидания критична',
		metrics: [
			{ start: 3200, end: 780, label: 'Время поиска (мс)', suffix: 'ms' },
			{ start: 0, end: 34, label: 'Рост конверсии (%)', suffix: '%' },
		],
	},
	{
		title: 'Асинхронная обработка с Redis + RabbitMQ',
		problem:
			'API зависал при генерации отчётов и отправке email-уведомлений, пользователи получали таймауты',
		solution:
			'Вынес тяжёлые задачи в RabbitMQ очереди, использовал Redis для кеша и отслеживания статусов задач',
		result:
			'API стал отвечать мгновенно, задачи обрабатываются в фоне. Количество таймаутов сократилось с 23% до 0.4%',
		takeaway:
			'Асинхронность — ключ к масштабируемости. Пользователю важен быстрый отклик, а не мгновенный результат',
		metrics: [
			{ start: 23, end: 0.4, label: 'Таймауты API (%)', suffix: '%' },
			{ start: 2400, end: 85, label: 'Время отклика (мс)', suffix: 'ms' },
		],
	},
	{
		title: 'Kremlin Neurology: Адаптивная медицинская библиотека',
		problem:
			'Старый сайт не открывался на мобильных, врачи не могли быстро найти нужные публикации на конференциях',
		solution:
			'Полная адаптация под все устройства, умный поиск по статьям, оптимизация загрузки изображений и PDF',
		result:
			'Мобильный трафик вырос с 12% до 47%, время на сайте увеличилось в 2.3 раза',
		takeaway:
			'Респонсивность — это не просто "красиво", это доступность контента для реальной аудитории',
		metrics: [
			{ start: 12, end: 47, label: 'Мобильный трафик (%)', suffix: '%' },
			{ start: 1, end: 2.3, label: 'Рост времени на сайте (x)', suffix: 'x' },
		],
	},
]

// Refs для метрик
const metricRefs = ref<HTMLElement[][]>([])
const animatedMetrics = ref<Set<string>>(new Set())

const setMetricRef = (
	el: HTMLElement | null,
	caseIndex: number,
	metricIndex: number
) => {
	if (el) {
		if (!metricRefs.value[caseIndex]) {
			metricRefs.value[caseIndex] = []
		}
		metricRefs.value[caseIndex][metricIndex] = el
	}
}

// Count-up анимация для метрик
const animateMetric = (
	element: HTMLElement,
	start: number,
	end: number,
	suffix: string = '',
	duration: number = 2000
) => {
	const startTime = performance.now()
	const range = end - start

	// Добавляем класс для анимации
	element.classList.add('animating')

	const updateValue = (currentTime: number) => {
		const elapsed = currentTime - startTime
		const progress = Math.min(elapsed / duration, 1)

		// Easing function для плавности (easeOutExpo)
		const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

		const currentValue = Math.round(start + range * easeProgress)
		element.textContent = `${currentValue}${suffix}`

		if (progress < 1) {
			requestAnimationFrame(updateValue)
		} else {
			// Убираем класс анимации и добавляем класс завершения
			element.classList.remove('animating')
			element.classList.add('animated')
		}
	}

	requestAnimationFrame(updateValue)
}

// Intersection Observer для запуска анимации при появлении в viewport
onMounted(() => {
	if (typeof window === 'undefined') return

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const element = entry.target as HTMLElement
					const key = element.dataset.metricKey

					// Проверяем, не была ли уже анимирована эта метрика
					if (key && !animatedMetrics.value.has(key)) {
						animatedMetrics.value.add(key)

						// Добавляем класс для CSS анимации появления
						element.classList.add('animated')

						// Запускаем count-up анимацию
						const start = parseInt(element.dataset.start || '0')
						const end = parseInt(element.dataset.end || '0')
						const suffix = element.dataset.suffix || ''

						setTimeout(() => {
							animateMetric(element, start, end, suffix)
						}, 200) // Небольшая задержка для лучшего эффекта
					}
				}
			})
		},
		{
			threshold: 0.5, // Запускать когда 50% элемента видно
			rootMargin: '0px',
		}
	)

	// Наблюдаем за всеми метриками
	nextTick(() => {
		metricRefs.value.forEach((caseMetrics, caseIndex) => {
			caseMetrics?.forEach((metricEl, metricIndex) => {
				if (metricEl) {
					// Добавляем data-атрибуты для анимации
					const caseItem = cases[caseIndex]
					const metric = caseItem?.metrics?.[metricIndex]
					if (metric) {
						metricEl.dataset.metricKey = `${caseIndex}-${metricIndex}`
						metricEl.dataset.start = metric.start.toString()
						metricEl.dataset.end = metric.end.toString()
						metricEl.dataset.suffix = metric.suffix || ''
					}
					observer.observe(metricEl)
				}
			})
		})
	})

	// Cleanup
	onUnmounted(() => {
		observer.disconnect()
	})
})
</script>

<style scoped lang="scss">
@use '~/assets/styles/components/case-studies-section';
</style>
