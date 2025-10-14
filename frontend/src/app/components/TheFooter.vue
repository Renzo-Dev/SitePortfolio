<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__content">
				<!-- Социальные ссылки -->
				<div class="footer__social">
					<a
						v-for="social in socialLinks"
						:key="social.name"
						:href="social.url"
						:aria-label="social.name"
						class="footer__social-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon :name="social.icon" />
					</a>
				</div>

				<!-- Copyright -->
				<p class="footer__copyright">
					© {{ currentYear }} Дан Кошевой — Разработка с душой и вниманием к
					деталям
				</p>

				<!-- Email -->
				<a href="mailto:dankoshevoy@gmail.com" class="footer__email">
					<Icon name="heroicons:envelope" />
					<span>dankoshevoy@gmail.com</span>
				</a>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
// Социальные ссылки
const socialLinks = [
	{
		name: 'Telegram',
		url: 'https://t.me/renzo_pw',
		icon: 'simple-icons:telegram',
	},
	{
		name: 'GitHub',
		url: 'https://github.com/Renzo-Dev',
		icon: 'simple-icons:github',
	},
	{
		name: 'Email',
		url: 'mailto:dankoshevoy@gmail.com',
		icon: 'heroicons:envelope',
	},
]

// Текущий год
const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
	background-color: $dark;
	color: $white;
	padding: $space-12 0 $space-8;

	@include respond-to('md') {
		padding: $space-16 0 $space-10;
	}

	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: $space-6;
		text-align: center;
	}

	// Социальные ссылки
	&__social {
		display: flex;
		gap: $space-4;
	}

	&__social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: $rounded-lg;
		background-color: rgba($white, 0.1);
		color: $white;
		font-size: 20px;
		@include transition(all);

		&:hover {
			background-color: $primary;
			transform: translateY(-4px);
			box-shadow: $shadow-lg;
		}

		&:active {
			transform: translateY(-2px);
		}
	}

	// Copyright
	&__copyright {
		font-size: $text-sm;
		color: rgba($white, 0.7);
		margin: 0;

		@include respond-to('md') {
			font-size: $text-base;
		}
	}

	// Email
	&__email {
		display: flex;
		align-items: center;
		gap: $space-2;
		font-size: $text-sm;
		color: rgba($white, 0.8);
		@include transition(color);

		&:hover {
			color: $primary;
		}

		@include respond-to('md') {
			font-size: $text-base;
		}
	}
}
</style>
