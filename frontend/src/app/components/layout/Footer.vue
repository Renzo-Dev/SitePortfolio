<template>
	<footer class="footer">
		<div class="footer__divider" />
		<div class="container">
			<div class="footer__content">
				<!-- Колонка 1: О проекте -->
				<div class="footer__column">
					<h4 class="footer__title">Dan Koshevoy</h4>
					<p class="footer__text">
						Full Stack разработчик с опытом создания современных веб-приложений
					</p>
				</div>

				<!-- Колонка 2: Навигация -->
				<div class="footer__column">
					<h4 class="footer__title">Навигация</h4>
					<nav class="footer__nav">
						<NuxtLink
							v-for="link in navLinks"
							:key="link.href"
							:to="link.href"
							class="footer__link"
						>
							{{ link.label }}
						</NuxtLink>
					</nav>
				</div>

				<!-- Колонка 3: Контакты -->
				<div class="footer__column">
					<h4 class="footer__title">Контакты</h4>
					<div class="footer__contacts">
						<a href="mailto:dankoshevoy@gmail.com" class="footer__link">
							<Icon name="ph:envelope-duotone" size="20" />
							dankoshevoy@gmail.com
						</a>
						<a
							href="https://t.me/renzo_pw"
							target="_blank"
							rel="noopener"
							class="footer__link"
						>
							<Icon name="ph:telegram-logo-duotone" size="20" />
							Telegram: @renzo_pw
						</a>
						<a
							href="https://github.com/Renzo-Dev"
							target="_blank"
							rel="noopener"
							class="footer__link"
						>
							<Icon name="ph:github-logo-duotone" size="20" />
							GitHub: Renzo-Dev
						</a>
					</div>
				</div>
			</div>

			<!-- Copyright -->
			<div class="footer__bottom">
				<p class="footer__copyright">
					© {{ currentYear }} Dan Koshevoy — Built with Nuxt & Vue
				</p>
				<p class="footer__made-with-love">
					Сделано с душой
					<svg
						class="footer__heart"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
						/>
					</svg>
				</p>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
// Footer компонент

const currentYear = new Date().getFullYear()

const navLinks = [
	{ label: 'Обо мне', href: '#about' },
	{ label: 'Портфолио', href: '#portfolio' },
	{ label: 'Услуги', href: '#services' },
	{ label: 'Контакты', href: '#contact' },
]
</script>

<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

.footer {
	background: $bg-primary;
	padding: $spacing-3xl 0 $spacing-lg;

	&__divider {
		height: 1px;
		background: linear-gradient(
			90deg,
			transparent 0%,
			rgba(255, 255, 255, 0.2) 50%,
			transparent 100%
		);
		margin-bottom: $spacing-3xl;
	}

	&__content {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: $spacing-2xl;
		margin-bottom: $spacing-2xl;

		@include mobile {
			grid-template-columns: 1fr;
			gap: $spacing-xl;
		}
	}

	&__column {
		display: flex;
		flex-direction: column;
		gap: $spacing-md;
	}

	&__title {
		font-size: $text-body-lg;
		font-weight: 600;
		color: $text-primary;
		margin-bottom: $spacing-sm;
	}

	&__text {
		color: $text-secondary;
		font-size: $text-body-sm;
		line-height: $line-body;
	}

	&__nav {
		display: flex;
		flex-direction: column;
		gap: $spacing-sm;
	}

	&__contacts {
		display: flex;
		flex-direction: column;
		gap: $spacing-sm;
	}

	&__link {
		position: relative;
		color: $text-secondary;
		font-size: $text-body-sm;
		text-decoration: none;
		transition: color $transition-base;
		width: fit-content;

		&::after {
			content: '';
			position: absolute;
			bottom: -2px;
			left: 50%;
			transform: translateX(-50%);
			width: 0;
			height: 1px;
			background: $text-primary;
			transition: width $transition-base;
		}

		&:hover {
			color: $text-primary;

			&::after {
				width: 100%;
			}
		}
	}

	&__bottom {
		padding-top: $spacing-lg;
		border-top: 1px solid $border;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: $spacing-sm;
	}

	&__copyright {
		color: $text-muted;
		font-size: $text-caption;
	}

	&__made-with-love {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: $spacing-xs;
		color: $text-muted;
		font-size: $text-caption;
	}

	&__heart {
		display: inline-block;
		width: 16px;
		height: 16px;
		color: #ff4444;
		filter: drop-shadow(0 0 4px rgba(255, 68, 68, 0.5));
		animation: heartbeat 1.5s ease-in-out infinite;
		transform-origin: center center;
		will-change: transform;
		vertical-align: middle;
	}
}

// Анимация сердцебиения
@keyframes heartbeat {
	0% {
		transform: scale(1);
	}
	7% {
		transform: scale(1.3);
	}
	14% {
		transform: scale(1);
	}
	21% {
		transform: scale(1.3);
	}
	28% {
		transform: scale(1);
	}
	100% {
		transform: scale(1);
	}
}
</style>
