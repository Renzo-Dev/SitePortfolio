<template>
	<section class="section section--hero">
		<div class="container">
			<div class="hero">
				<!-- Контент -->
				<div class="hero__content">
					<h1 class="hero__title">
						Создаю <span class="hero__highlight">современные сайты</span> и
						веб-приложения
					</h1>

					<p class="hero__subtitle">
						Frontend + Backend разработка на Vue, Laravel, Docker, Redis и MySQL
					</p>

					<!-- CTA кнопки -->
					<div class="hero__actions">
						<BaseButton
							variant="primary"
							size="lg"
							@click="scrollToSection('portfolio')"
						>
							Посмотреть работы
						</BaseButton>
						<BaseButton
							variant="ghost"
							size="lg"
							@click="scrollToSection('contact')"
						>
							Заказать разработку
						</BaseButton>
					</div>
				</div>

				<!-- Декоративная графика -->
				<div class="hero__visual">
					<div class="hero__circle hero__circle--1"></div>
					<div class="hero__circle hero__circle--2"></div>
					<div class="hero__circle hero__circle--3"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
// Плавный скролл к секции
const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId)
	if (element) {
		element.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
}
</script>

<style lang="scss" scoped>
.hero {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	min-height: 100vh;
	position: relative;
	padding: $space-16 0;

	@include respond-to('lg') {
		padding: $space-20 0;
	}

	// Контент
	&__content {
		max-width: 900px;
		z-index: 2;
		position: relative;
	}

	&__title {
		margin-bottom: $space-6;
		animation: fadeInUp 0.8s ease-out;

		@include respond-to('md') {
			margin-bottom: $space-8;
		}
	}

	&__highlight {
		@include gradient($primary, $secondary);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	&__subtitle {
		font-size: $text-lg;
		color: $gray;
		margin-bottom: $space-10;
		animation: fadeInUp 0.8s ease-out 0.2s both;

		@include respond-to('md') {
			font-size: $text-2xl;
			margin-bottom: $space-12;
		}
	}

	// CTA кнопки
	&__actions {
		display: flex;
		flex-direction: column;
		gap: $space-4;
		animation: fadeInUp 0.8s ease-out 0.4s both;

		@include respond-to('md') {
			flex-direction: row;
			justify-content: center;
			gap: $space-6;
		}
	}

	// Декоративная графика
	&__visual {
		position: absolute;
		inset: 0;
		overflow: hidden;
		z-index: 1;
		pointer-events: none;
	}

	&__circle {
		position: absolute;
		border-radius: 50%;
		opacity: 0.1;

		&--1 {
			width: 300px;
			height: 300px;
			background: $primary;
			top: 10%;
			right: -100px;
			animation: float 6s ease-in-out infinite;
		}

		&--2 {
			width: 200px;
			height: 200px;
			background: $secondary;
			bottom: 20%;
			left: -50px;
			animation: float 8s ease-in-out infinite 1s;
		}

		&--3 {
			width: 150px;
			height: 150px;
			background: $primary;
			top: 60%;
			right: 10%;
			animation: float 7s ease-in-out infinite 2s;
		}
	}
}

// Анимации
@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(30px);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes float {
	0%,
	100% {
		transform: translateY(0);
	}

	50% {
		transform: translateY(-20px);
	}
}
</style>
