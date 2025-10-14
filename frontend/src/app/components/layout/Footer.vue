<template>
	<footer class="footer">
		<div class="footer__divider"></div>
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
	}

	&__copyright {
		color: $text-muted;
		font-size: $text-caption;
	}
}
</style>
