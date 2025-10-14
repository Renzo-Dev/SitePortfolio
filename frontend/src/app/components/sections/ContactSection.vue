<template>
	<section id="contact" class="section" style="background-color: #f8fafc">
		<div class="container">
			<h2 class="section-title">Контакты</h2>
			<p class="section-subtitle">Есть идея или проект? Напишите мне</p>

			<div class="contact">
				<!-- Форма заказа -->
				<BaseCard variant="elevated" class="contact__form-card">
					<form class="contact__form" @submit.prevent="handleSubmit">
						<h3 class="contact__form-title">Отправить заявку</h3>

						<!-- Имя -->
						<BaseInput
							v-model="form.name"
							label="Имя"
							placeholder="Ваше имя"
							required
							icon-left="heroicons:user"
							:error="errors.name"
						/>

						<!-- Email -->
						<BaseInput
							v-model="form.email"
							type="email"
							label="Email"
							placeholder="your@email.com"
							required
							icon-left="heroicons:envelope"
							:error="errors.email"
						/>

						<!-- Сообщение -->
						<BaseTextarea
							v-model="form.message"
							label="Сообщение"
							placeholder="Расскажите о вашем проекте..."
							required
							:rows="5"
							:error="errors.message"
						/>

						<!-- Кнопка отправки -->
						<BaseButton
							type="submit"
							variant="primary"
							size="lg"
							:loading="isSubmitting"
							style="width: 100%"
						>
							Отправить заявку
						</BaseButton>

						<!-- Сообщение об успехе -->
						<Transition name="message">
							<div v-if="successMessage" class="contact__success">
								<Icon name="heroicons:check-circle" />
								<p>{{ successMessage }}</p>
							</div>
						</Transition>
					</form>
				</BaseCard>

				<!-- Альтернативные контакты -->
				<div class="contact__info">
					<h3 class="contact__info-title">Или свяжитесь напрямую</h3>

					<div class="contact__links">
						<a
							v-for="contact in contacts"
							:key="contact.type"
							:href="contact.url"
							class="contact__link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="contact__link-icon">
								<Icon :name="contact.icon" />
							</div>
							<div class="contact__link-content">
								<p class="contact__link-label">{{ contact.label }}</p>
								<p class="contact__link-value">{{ contact.value }}</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
// Форма
const form = reactive({
	name: '',
	email: '',
	message: '',
})

const errors = reactive({
	name: '',
	email: '',
	message: '',
})

const isSubmitting = ref(false)
const successMessage = ref('')

// Контакты
const contacts = [
	{
		type: 'email',
		label: 'Email',
		value: 'dankoshevoy@gmail.com',
		url: 'mailto:dankoshevoy@gmail.com',
		icon: 'heroicons:envelope',
	},
	{
		type: 'telegram',
		label: 'Telegram',
		value: '@renzo_dev',
		url: 'https://t.me/renzo_pw',
		icon: 'simple-icons:telegram',
	},
	{
		type: 'github',
		label: 'GitHub',
		value: 'github.com/renzodev',
		url: 'https://github.com/Renzo-Dev',
		icon: 'simple-icons:github',
	},
]

// Валидация
const validateForm = () => {
	let isValid = true
	errors.name = ''
	errors.email = ''
	errors.message = ''

	if (!form.name.trim()) {
		errors.name = 'Имя обязательно'
		isValid = false
	}

	if (!form.email.trim()) {
		errors.email = 'Email обязателен'
		isValid = false
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
		errors.email = 'Некорректный email'
		isValid = false
	}

	if (!form.message.trim()) {
		errors.message = 'Сообщение обязательно'
		isValid = false
	}

	return isValid
}

// Отправка формы
const handleSubmit = async () => {
	if (!validateForm()) {
		return
	}

	isSubmitting.value = true

	try {
		// TODO: Интеграция с Telegram Bot API
		// const response = await $fetch('/api/order', {
		//   method: 'POST',
		//   body: form,
		// })

		// Имитация отправки
		await new Promise((resolve) => setTimeout(resolve, 1500))

		successMessage.value =
			'Спасибо! Ваша заявка отправлена. Свяжусь с вами в ближайшее время.'

		// Сброс формы
		form.name = ''
		form.email = ''
		form.message = ''

		// Скрыть сообщение через 5 секунд
		setTimeout(() => {
			successMessage.value = ''
		}, 5000)
	} catch (error) {
		console.error('Ошибка отправки формы:', error)
		errors.message = 'Произошла ошибка. Попробуйте еще раз.'
	} finally {
		isSubmitting.value = false
	}
}
</script>

<style lang="scss" scoped>
.contact {
	display: grid;
	grid-template-columns: 1fr;
	gap: $space-12;
	max-width: 1000px;
	margin: 0 auto;

	@include respond-to('lg') {
		grid-template-columns: 1.5fr 1fr;
		gap: $space-16;
	}

	// Форма
	&__form-card {
		height: fit-content;
	}

	&__form {
		display: flex;
		flex-direction: column;
		gap: $space-6;
	}

	&__form-title {
		font-size: $text-2xl;
		font-weight: 600;
		color: $dark;
		margin: 0 0 $space-4 0;
	}

	// Сообщение об успехе
	&__success {
		display: flex;
		align-items: center;
		gap: $space-3;
		padding: $space-4;
		background-color: rgba($secondary, 0.1);
		border-left: 4px solid $secondary;
		border-radius: $rounded-md;
		color: darken($secondary, 10%);

		:deep(svg) {
			font-size: 24px;
			flex-shrink: 0;
		}

		p {
			margin: 0;
			font-size: $text-sm;
		}
	}

	// Контактная информация
	&__info {
		display: flex;
		flex-direction: column;
		gap: $space-6;
	}

	&__info-title {
		font-size: $text-2xl;
		font-weight: 600;
		color: $dark;
		margin: 0;
	}

	&__links {
		display: flex;
		flex-direction: column;
		gap: $space-4;
	}

	&__link {
		display: flex;
		align-items: center;
		gap: $space-4;
		padding: $space-5;
		background-color: $white;
		border-radius: $rounded-lg;
		@include card-shadow('sm');
		@include transition(all);

		&:hover {
			@include card-shadow('md');
			transform: translateX(8px);
		}
	}

	&__link-icon {
		width: 48px;
		height: 48px;
		border-radius: $rounded-lg;
		@include gradient($primary, $secondary);
		color: $white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		flex-shrink: 0;
	}

	&__link-content {
		display: flex;
		flex-direction: column;
		gap: $space-1;
	}

	&__link-label {
		font-size: $text-sm;
		color: $gray;
		margin: 0;
	}

	&__link-value {
		font-size: $text-base;
		font-weight: 500;
		color: $dark;
		margin: 0;
	}
}

// Анимация сообщения
.message-enter-active,
.message-leave-active {
	transition: all 0.3s ease;
}

.message-enter-from,
.message-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
