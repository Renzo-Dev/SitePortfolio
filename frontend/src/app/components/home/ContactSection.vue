<template>
	<section class="contact section" id="contact">
		<div class="container">
			<h2 class="contact__title text-center">
				<Icon name="ph:chat-circle-duotone" size="32" />
				Свяжитесь со мной
			</h2>
			<p class="contact__subtitle text-center text-secondary">
				Есть идея или проект? Напишите мне
			</p>

			<div class="contact__grid">
				<!-- Форма -->
				<form class="contact__form" @submit.prevent="handleSubmit">
					<Input
						v-model="form.name"
						label="Ваше имя"
						placeholder="Как к вам обращаться?"
						required
					/>
					<Input
						v-model="form.email"
						type="email"
						label="Email"
						placeholder="your@email.com"
						required
					/>
					<Input
						v-model="form.message"
						type="textarea"
						label="Сообщение"
						placeholder="Расскажите о вашем проекте..."
						:rows="6"
						required
					/>

					<Button type="submit" variant="primary" :disabled="isSubmitting">
						{{ isSubmitting ? 'Отправка...' : 'Отправить' }}
					</Button>

					<!-- Сообщения об успехе/ошибке -->
					<Transition name="fade">
						<div
							v-if="successMessage"
							class="contact__message contact__message--success"
						>
							{{ successMessage }}
						</div>
					</Transition>

					<Transition name="fade">
						<div
							v-if="errorMessage"
							class="contact__message contact__message--error"
						>
							{{ errorMessage }}
						</div>
					</Transition>
				</form>

				<!-- Контактная информация -->
				<div class="contact__info">
					<h3 class="contact__info-title">Контакты</h3>

					<div class="contact__links">
						<div class="contact__email-wrapper">
							<a href="mailto:dankoshevoy@gmail.com" class="contact__link">
								<Icon name="ph:envelope-duotone" size="24" />
								<span>dankoshevoy@gmail.com</span>
							</a>
							<button
								@click="copyEmail"
								class="contact__copy-btn"
								:class="{ 'contact__copy-btn--copied': isCopied }"
							>
								<Icon
									:name="isCopied ? 'ph:check-duotone' : 'ph:copy-duotone'"
									size="20"
								/>
								<span>{{ isCopied ? 'Скопировано!' : 'Копировать' }}</span>
							</button>
						</div>

						<a
							href="https://t.me/renzo_pw"
							target="_blank"
							rel="noopener"
							class="contact__link"
						>
							<Icon name="mdi:send" size="24" />
							<span>Telegram: @renzo_pw</span>
						</a>

						<a
							href="https://github.com/Renzo-Dev"
							target="_blank"
							rel="noopener"
							class="contact__link"
						>
							<Icon name="mdi:github" size="24" />
							<span>GitHub: Renzo-Dev</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import Input from '~/components/ui/Input.vue'
import Button from '~/components/ui/Button.vue'

const form = reactive({
	name: '',
	email: '',
	message: '',
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const isCopied = ref(false)

// Функция копирования email
const copyEmail = async () => {
	try {
		await navigator.clipboard.writeText('dankoshevoy@gmail.com')
		isCopied.value = true

		// Сброс через 2 секунды
		setTimeout(() => {
			isCopied.value = false
		}, 2000)
	} catch (err) {
		console.error('Ошибка копирования:', err)
	}
}

const handleSubmit = async () => {
	isSubmitting.value = true
	successMessage.value = ''
	errorMessage.value = ''

	try {
		const response = await $fetch('/api/order', {
			method: 'POST',
			body: {
				name: form.name,
				email: form.email,
				message: form.message,
			},
		})

		successMessage.value =
			'Сообщение успешно отправлено! Свяжусь с вами в ближайшее время.'

		// Очистка формы
		form.name = ''
		form.email = ''
		form.message = ''

		// Скрываем сообщение через 5 секунд
		setTimeout(() => {
			successMessage.value = ''
		}, 5000)
	} catch (error: any) {
		errorMessage.value =
			error?.data?.message || 'Произошла ошибка при отправке. Попробуйте позже.'

		setTimeout(() => {
			errorMessage.value = ''
		}, 5000)
	} finally {
		isSubmitting.value = false
	}
}

// Scroll reveal
// Без анимаций
</script>

<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

.contact {
	&__title {
		font-size: $text-h2;
		margin-bottom: $spacing-md;
	}

	&__subtitle {
		margin-bottom: $spacing-3xl;
		font-size: $text-body-lg;
	}

	&__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: $spacing-3xl;
		margin-top: $spacing-2xl;

		@include mobile {
			grid-template-columns: 1fr;
			gap: $spacing-2xl;
		}
	}

	&__form {
		display: flex;
		flex-direction: column;
		gap: $spacing-lg;
	}

	&__message {
		padding: $spacing-md;
		border-radius: $radius-sm;
		font-size: $text-body-sm;

		&--success {
			background: rgba(0, 255, 136, 0.1);
			border: 1px solid $success;
			color: $success;
		}

		&--error {
			background: rgba(255, 0, 0, 0.1);
			border: 1px solid #ff4444;
			color: #ff4444;
		}
	}

	&__info {
		display: flex;
		flex-direction: column;
		gap: $spacing-lg;
	}

	&__info-title {
		font-size: $text-h3;
	}

	&__links {
		display: flex;
		flex-direction: column;
		gap: $spacing-md;
	}

	&__link {
		display: flex;
		align-items: center;
		gap: $spacing-md;
		padding: $spacing-md;
		background: $bg-card;
		border: 1px solid $border;
		border-radius: $radius-sm;
		color: $text-secondary;
		text-decoration: none;
		transition: all $transition-base;

		&:hover {
			border-color: $accent;
			color: $text-primary;
			transform: translateX(8px);

			:deep(svg) {
				color: $accent;
			}
		}

		:deep(svg) {
			color: $text-muted;
			transition: color $transition-base;
		}

		span {
			font-weight: 500;
		}
	}

	&__email-wrapper {
		display: flex;
		gap: $spacing-sm;
		align-items: stretch;

		.contact__link {
			flex: 1;
			transform: none;

			&:hover {
				transform: translateX(4px);
			}
		}
	}

	&__copy-btn {
		display: flex;
		align-items: center;
		gap: $spacing-xs;
		padding: $spacing-md $spacing-lg;
		background: $bg-card;
		border: 1px solid $border;
		border-radius: $radius-sm;
		color: $text-secondary;
		font-size: $text-body-sm;
		cursor: pointer;
		transition: all $transition-base;
		white-space: nowrap;

		&:hover {
			border-color: $accent;
			color: $text-primary;
			background: rgba(255, 255, 255, 0.05);
		}

		&--copied {
			border-color: $success;
			color: $success;
			background: rgba(0, 255, 136, 0.1);

			// Эффект масштабирования при копировании
			animation: copyPulse 0.4s ease-out;
		}
	}
}

@keyframes copyPulse {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.05);
	}
	100% {
		transform: scale(1);
	}
}

// Transition для сообщений
.fade-enter-active,
.fade-leave-active {
	transition: all $transition-base;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
