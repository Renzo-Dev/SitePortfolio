<template>
	<section id="hero" ref="heroSection" class="hero">
		<!-- Animated gradient background -->
		<div class="hero__gradient" />

		<!-- Canvas для particles -->
		<canvas ref="particlesCanvas" class="hero__particles" />

		<!-- Floating shapes -->
		<div class="hero__shapes">
			<div class="shape shape--1" />
			<div class="shape shape--2" />
			<div class="shape shape--3" />
		</div>

		<div class="container">
			<div ref="heroContent" class="hero__content">
				<!-- Главный заголовок с анимацией по словам -->
				<h1 class="hero__title text-gradient">
					<span
						v-for="(word, index) in titleWords"
						:key="index"
						class="word"
						:style="{ animationDelay: `${0.1 + index * 0.1}s` }"
					>
						{{ word }}&nbsp;
					</span>
				</h1>

				<!-- Подзаголовок -->
				<p class="hero__subtitle">
					Frontend + Backend разработка на Vue, Laravel, Docker, Redis и MySQL
				</p>

				<!-- CTA кнопки -->
				<div class="hero__cta">
					<Button
						variant="primary"
						@click="scrollToSection('portfolio')"
						@mousemove="handleButtonHover"
					>
						<Icon name="ph:briefcase-duotone" size="20" />
						Посмотреть работы
					</Button>
					<Button
						variant="secondary"
						@click="scrollToSection('contact')"
						@mousemove="handleButtonHover"
					>
						<Icon name="ph:rocket-launch-duotone" size="20" />
						Заказать разработку
					</Button>
				</div>

				<!-- Scroll indicator -->
				<div class="hero__scroll">
					<span class="scroll-text">Прокрути вниз</span>
					<div class="scroll-line" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue'

// Разбиваем текст заголовка на слова для анимации
const titleWords = ref([
	'Создаю',
	'современные',
	'сайты',
	'и',
	'веб-приложения',
])

// Refs
const heroSection = ref<HTMLElement>()
const heroContent = ref<HTMLElement>()

// Плавный скролл к секциям
const scrollToSection = (id: string) => {
	const element = document.getElementById(id)
	if (element) {
		const offset = 80
		const elementPosition = element.getBoundingClientRect().top + window.scrollY
		window.scrollTo({
			top: elementPosition - offset,
			behavior: 'smooth', // Нативный плавный скролл
		})
	}
}

// Ripple effect для кнопок (Google Material Design style)
const handleButtonHover = (event: MouseEvent) => {
	const button = event.currentTarget as HTMLElement
	const rect = button.getBoundingClientRect()
	const x = ((event.clientX - rect.left) / rect.width) * 100
	const y = ((event.clientY - rect.top) / rect.height) * 100

	button.style.setProperty('--ripple-x', `${x}%`)
	button.style.setProperty('--ripple-y', `${y}%`)
}

// Canvas Particles
const particlesCanvas = ref<HTMLCanvasElement>()
const { initParticles } = useParticles(particlesCanvas)

// Parallax эффект для контента
useParallax(heroContent, {
	speed: 0.5, // Скорость параллакса
	fadeOut: true, // Fade out при скролле
	maxDistance: 0, // Будет использована высота секции
})

onMounted(() => {
	// Инициализация particles с адаптивными настройками
	const cleanup = initParticles({
		particleColor: 'rgba(255, 255, 255, 0.4)',
		lineColor: 'rgba(255, 255, 255, 0.15)',
	})

	onUnmounted(() => {
		cleanup?.()
	})
})
</script>

<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

// ============================================
// Keyframes для анимаций
// ============================================

// Анимация слов заголовка
@keyframes wordReveal {
	0% {
		opacity: 0;
		transform: translateY(40px) rotateX(-90deg);
		filter: blur(8px);
	}
	100% {
		opacity: 1;
		transform: translateY(0) rotateX(0);
		filter: blur(0);
	}
}

// Fade-in с blur для подзаголовка
@keyframes fadeInBlur {
	from {
		opacity: 0;
		transform: translateY(20px);
		filter: blur(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
		filter: blur(0);
	}
}

// Bounce эффект для кнопок
@keyframes fadeInBounce {
	0% {
		opacity: 0;
		transform: translateY(30px) scale(0.9);
	}
	50% {
		transform: translateY(-5px) scale(1.02);
	}
	70% {
		transform: translateY(2px) scale(0.98);
	}
	100% {
		opacity: 1;
		transform: translateY(0) scale(1);
	}
}

// Вращение градиента (универсальная)
@keyframes gradientRotate {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

// Диагональное движение градиента
@keyframes gradientSlide {
	0% {
		background-position: 0% 0%;
	}
	50% {
		background-position: 100% 100%;
	}
	100% {
		background-position: 0% 0%;
	}
}

// Floating эффект для фигур
@keyframes float {
	0%,
	100% {
		transform: translateY(0) rotate(0deg);
	}
	33% {
		transform: translateY(-20px) rotate(5deg);
	}
	66% {
		transform: translateY(10px) rotate(-5deg);
	}
}

// Scroll indicator
@keyframes scrollBounce {
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(8px);
	}
}

@keyframes lineGrow {
	0% {
		transform: scaleY(0);
	}
	100% {
		transform: scaleY(1);
	}
}

// ============================================
// Hero Section Styles
// ============================================

.hero {
	position: relative;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 80px;
	overflow: hidden;
	background: $bg-primary;

	// Animated gradient background
	&__gradient {
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(
			circle at center,
			rgba(255, 255, 255, 0.03) 0%,
			rgba(255, 255, 255, 0.01) 25%,
			transparent 50%
		);
		animation: gradientRotate 20s ease infinite;
		z-index: 0;
	}

	// Particles canvas
	&__particles {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		opacity: 0.7;
	}

	// Floating shapes
	&__shapes {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		pointer-events: none;

		.shape {
			position: absolute;
			border-radius: 50%;
			filter: blur(60px);
			opacity: 0.15;

			&--1 {
				width: 300px;
				height: 300px;
				background: linear-gradient(135deg, #ffffff 0%, transparent 100%);
				top: 10%;
				left: 10%;
				animation: float 15s ease-in-out infinite;
			}

			&--2 {
				width: 200px;
				height: 200px;
				background: linear-gradient(225deg, #ffffff 0%, transparent 100%);
				bottom: 20%;
				right: 15%;
				animation: float 12s ease-in-out infinite 2s;
			}

			&--3 {
				width: 250px;
				height: 250px;
				background: radial-gradient(circle, #ffffff 0%, transparent 70%);
				top: 50%;
				right: 10%;
				animation: float 18s ease-in-out infinite 4s;
			}
		}
	}

	// Content container
	&__content {
		position: relative;
		z-index: 2;
		text-align: center;
		max-width: 900px;
		margin: 0 auto;
		will-change: transform, opacity;
		// Убираем transition для плавности parallax
		// transform и opacity управляются через useParallax
	}

	// Title with word-by-word animation
	&__title {
		font-size: $text-h1;
		line-height: $line-h1;
		margin-bottom: $spacing-lg;
		perspective: 1000px;

		.word {
			display: inline-block;
			opacity: 0;
			animation: wordReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
			transform-origin: center bottom;
		}

		@include mobile {
			font-size: clamp(32px, 10vw, 48px);
			line-height: 1.2;
		}
	}

	// Subtitle
	&__subtitle {
		font-size: $text-body-lg;
		color: $text-secondary;
		margin-bottom: $spacing-2xl;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		animation: fadeInBlur 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;

		@include mobile {
			font-size: $text-body;
			margin-bottom: $spacing-xl;
		}
	}

	// CTA buttons - Modern Google-style
	&__cta {
		display: flex;
		gap: $spacing-lg;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: $spacing-3xl;

		:deep(button) {
			opacity: 0;
			position: relative;
			padding: 16px 40px;
			font-size: 16px;
			font-weight: 600;
			border-radius: 12px;
			overflow: hidden;
			isolation: isolate;
			transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
				box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);

			// Начальная анимация появления
			&:nth-child(1) {
				animation: fadeInBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s
					forwards;
			}

			&:nth-child(2) {
				animation: fadeInBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1.4s
					forwards;
			}

			// ============================================
			// PRIMARY BUTTON - "Посмотреть работы"
			// ============================================
			&.btn--primary {
				background: #ffffff;
				color: #000000;
				box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05);
				border: none;

				// Ripple container - плавная волна от курсора
				&::before {
					content: '';
					position: absolute;
					inset: 0;
					background: radial-gradient(
						circle 400px at var(--ripple-x, 50%) var(--ripple-y, 50%),
						rgba(0, 0, 0, 0.12) 0%,
						rgba(0, 0, 0, 0.08) 30%,
						rgba(0, 0, 0, 0.04) 50%,
						transparent 70%
					);
					opacity: 0;
					transform: scale(0.3);
					transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
						opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
					pointer-events: none;
					z-index: 0;
					will-change: transform, opacity;
				}

				// Hover overlay - тонкий градиент
				&::after {
					content: '';
					position: absolute;
					inset: 0;
					background: linear-gradient(
						135deg,
						rgba(0, 0, 0, 0.04) 0%,
						rgba(0, 0, 0, 0.02) 50%,
						rgba(0, 0, 0, 0.04) 100%
					);
					opacity: 0;
					transition: opacity 0.3s ease;
					pointer-events: none;
					z-index: 0;
				}

				// Ensure content is above overlays
				> * {
					position: relative;
					z-index: 1;
				}

				&:hover {
					transform: translateY(-2px);
					box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15),
						0 12px 40px rgba(0, 0, 0, 0.1);

					&::before {
						opacity: 1;
						transform: scale(1.2);
					}

					&::after {
						opacity: 1;
					}
				}

				&:active {
					transform: translateY(0);
					box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1),
						0 4px 16px rgba(0, 0, 0, 0.05);
					transition: transform 0.15s ease, box-shadow 0.15s ease;

					&::before {
						transform: scale(1.5);
						opacity: 0.7;
						transition: transform 0.2s ease;
					}
				}
			}

			// ============================================
			// SECONDARY BUTTON - "Заказать разработку"
			// ============================================
			&.btn--secondary {
				background: transparent;
				color: #ffffff;
				box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3);
				border: none;

				// Ripple container - светлая волна от курсора
				&::before {
					content: '';
					position: absolute;
					inset: 0;
					background: radial-gradient(
						circle 400px at var(--ripple-x, 50%) var(--ripple-y, 50%),
						rgba(255, 255, 255, 0.2) 0%,
						rgba(255, 255, 255, 0.12) 30%,
						rgba(255, 255, 255, 0.06) 50%,
						transparent 70%
					);
					opacity: 0;
					transform: scale(0.3);
					transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
						opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
					pointer-events: none;
					z-index: 0;
					will-change: transform, opacity;
				}

				// Hover overlay - деликатное свечение
				&::after {
					content: '';
					position: absolute;
					inset: 0;
					background: rgba(255, 255, 255, 0.06);
					opacity: 0;
					transition: opacity 0.3s ease;
					pointer-events: none;
					z-index: 0;
				}

				// Ensure content is above overlays
				> * {
					position: relative;
					z-index: 1;
				}

				&:hover {
					transform: translateY(-2px);
					box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5),
						0 6px 20px rgba(255, 255, 255, 0.1),
						0 12px 40px rgba(255, 255, 255, 0.05);

					&::before {
						opacity: 1;
						transform: scale(1.2);
					}

					&::after {
						opacity: 1;
					}
				}

				&:active {
					transform: translateY(0);
					box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3);
					transition: transform 0.15s ease, box-shadow 0.15s ease;

					&::before {
						transform: scale(1.5);
						opacity: 0.7;
						transition: transform 0.2s ease;
					}
				}
			}

			// ============================================
			// Анимация иконок
			// ============================================
			:deep(.icon) {
				transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
				position: relative;
				z-index: 1;
			}

			&:hover :deep(.icon) {
				transform: scale(1.1) translateX(2px);
			}

			&:active :deep(.icon) {
				transform: scale(1) translateX(0);
			}

			// Focus ring
			&:focus-visible {
				outline: none;
				box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
			}
		}

		@include mobile {
			flex-direction: column;
			align-items: stretch;
			gap: $spacing-md;

			:deep(button) {
				padding: 14px 32px;
				font-size: 15px;
			}
		}
	}

	// Scroll indicator
	&__scroll {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		margin-top: 60px;
		opacity: 0;
		animation: fadeInBlur 0.6s ease 2s forwards;

		.scroll-text {
			font-size: 12px;
			color: $text-secondary;
			text-transform: uppercase;
			letter-spacing: 2px;
			font-weight: 500;
		}

		.scroll-line {
			width: 1px;
			height: 40px;
			background: linear-gradient(to bottom, $text-secondary, transparent);
			transform-origin: top;
			animation: lineGrow 1s ease 2.5s both, scrollBounce 2s ease 3.5s infinite;
		}

		@include mobile {
			margin-top: 40px;
		}
	}
}

// ============================================
// Accessibility
// ============================================

@media (prefers-reduced-motion: reduce) {
	.hero {
		&__gradient,
		&__shapes .shape {
			animation: none !important;
		}

		&__title .word {
			animation: none !important;
			opacity: 1 !important;
			transform: none !important;
		}

		&__subtitle,
		&__cta :deep(button),
		&__scroll,
		&__scroll .scroll-line {
			animation: none !important;
			opacity: 1 !important;
		}

		&__content {
			transition: none !important;
		}
	}
}
</style>
