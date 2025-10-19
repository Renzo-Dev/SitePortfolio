<template>
	<div class="pacman-effect">
		<div
			ref="pacmanRef"
			class="pacman"
			:class="{
				'pacman--right': direction === 'right',
				'pacman--left': direction === 'left',
			}"
			:style="pacmanStyle"
		>
			<!-- Тело пакмана -->
			<div class="pacman__body">
				<div class="pacman__mouth"></div>
			</div>
			<!-- Глаз -->
			<div class="pacman__eye"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
type Direction = 'left' | 'right'

const pacmanRef = ref<HTMLElement | null>(null)
const direction = ref<Direction>('right')
const positionX = ref(0)
const positionY = ref(0)
const speed = ref(2) // Скорость движения (пикселей за кадр)
const windowWidth = ref(0)
const windowHeight = ref(0)
const viewportTop = ref(0)
const viewportBottom = ref(0)
const animationId = ref<number | null>(null)

// Размер пакмана
const PACMAN_SIZE = 60

const pacmanStyle = computed(() => ({
	left: `${positionX.value}px`,
	top: `${positionY.value}px`,
}))

// Инициализация при монтировании
onMounted(() => {
	if (!import.meta.client) return

	// Устанавливаем размеры окна
	updateWindowSize()
	window.addEventListener('resize', updateWindowSize)

	// Начальная позиция (случайная по Y в пределах viewport)
	positionX.value = -PACMAN_SIZE
	positionY.value = Math.random() * (window.innerHeight - PACMAN_SIZE)

	// Обработчик скролла для отслеживания viewport
	window.addEventListener('scroll', updateViewport, { passive: true })
	updateViewport()

	// Запускаем анимацию
	startAnimation()
})

onUnmounted(() => {
	if (!import.meta.client) return

	window.removeEventListener('resize', updateWindowSize)
	window.removeEventListener('scroll', updateViewport)

	if (animationId.value !== null) {
		cancelAnimationFrame(animationId.value)
	}
})

// Обновление размеров окна
const updateWindowSize = () => {
	windowWidth.value = window.innerWidth
	windowHeight.value = window.innerHeight
}

// Обновление viewport (видимая область)
const updateViewport = () => {
	viewportTop.value = window.scrollY
	viewportBottom.value = window.scrollY + window.innerHeight
}

// Основная анимация
const startAnimation = () => {
	const animate = () => {
		// Движение по горизонтали
		if (direction.value === 'right') {
			positionX.value += speed.value
			// Достиг правого края - разворачиваемся
			if (positionX.value >= windowWidth.value) {
				direction.value = 'left'
				positionX.value = windowWidth.value
			}
		} else {
			positionX.value -= speed.value
			// Достиг левого края - разворачиваемся
			if (positionX.value <= -PACMAN_SIZE) {
				direction.value = 'right'
				positionX.value = -PACMAN_SIZE
			}
		}

		// Движение по вертикали (следование за viewport)
		const pacmanCenterY = positionY.value + PACMAN_SIZE / 2
		const viewportCenterY = viewportTop.value + windowHeight.value / 2

		// Плавное движение к центру видимой области
		const distanceY = viewportCenterY - pacmanCenterY
		const smoothFactor = 0.02 // Коэффициент плавности (меньше = плавнее)

		positionY.value += distanceY * smoothFactor

		// Ограничиваем по границам документа
		const maxY = Math.max(
			document.documentElement.scrollHeight - PACMAN_SIZE,
			windowHeight.value - PACMAN_SIZE
		)
		positionY.value = Math.max(0, Math.min(positionY.value, maxY))

		// Продолжаем анимацию
		animationId.value = requestAnimationFrame(animate)
	}

	animate()
}
</script>

<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

.pacman-effect {
	position: fixed;
	inset: 0;
	pointer-events: none;
	z-index: $z-base;
	overflow: hidden;
}

.pacman {
	position: absolute;
	width: 60px;
	height: 60px;
	transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	will-change: left, top;

	// Направление вправо
	&--right {
		transform: scaleX(1);
	}

	// Направление влево (зеркалим)
	&--left {
		transform: scaleX(-1);
	}

	// Тело пакмана
	&__body {
		position: relative;
		width: 60px;
		height: 60px;
		background: $text-primary;
		border-radius: 50%;
		overflow: hidden;

		// Рот (треугольный вырез)
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			right: 0;
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 30px 30px 30px 0;
			border-color: transparent $bg-primary transparent transparent;
			transform-origin: left center;
			animation: chomp 0.5s ease-in-out infinite;
		}
	}

	// Глаз
	&__eye {
		position: absolute;
		top: 12px;
		right: 18px;
		width: 8px;
		height: 8px;
		background: $bg-primary;
		border-radius: 50%;
		z-index: 1;
	}
}

// Анимация открытия/закрытия рта
@keyframes chomp {
	0%,
	100% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(40deg);
	}
}

// Адаптивность
@media (max-width: 768px) {
	.pacman {
		width: 40px;
		height: 40px;

		&__body {
			width: 40px;
			height: 40px;

			&::before {
				border-width: 20px 20px 20px 0;
			}
		}

		&__eye {
			top: 8px;
			right: 12px;
			width: 6px;
			height: 6px;
		}
	}
}

// Отключаем для пользователей с prefers-reduced-motion
@media (prefers-reduced-motion: reduce) {
	.pacman {
		display: none;
	}
}
</style>

