<template>
	<section id="contact" class="contact section">
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
						:error="validationErrors.name"
					/>
					<Input
						v-model="form.email"
						type="email"
						label="Email"
						placeholder="your@email.com"
						:error="validationErrors.email"
					/>
					<Input
						v-model="form.phone"
						type="tel"
						label="Телефон"
						placeholder="+7 (999) 123-45-67"
						:error="validationErrors.phone"
					/>
					<Input
						v-model="form.telegram"
						label="Telegram"
						placeholder="@username или ссылка"
						:error="validationErrors.telegram"
					/>
					<Input
						v-model="form.message"
						type="textarea"
						label="Сообщение (необязательно)"
						placeholder="Расскажите о вашем проекте..."
						:rows="6"
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
								class="contact__copy-btn"
								:class="{ 'contact__copy-btn--copied': isCopied }"
								@click="copyEmail"
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
import Button from '~/components/ui/Button.vue'
import Input from '~/components/ui/Input.vue'

const form = reactive({
	name: '',
	email: '',
	phone: '',
	telegram: '',
	message: '',
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const isCopied = ref(false)
const validationErrors = reactive({
	name: '',
	email: '',
	phone: '',
	telegram: '',
})

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
		// Тихо игнорируем ошибку копирования
	}
}

// Валидация формы
const validateForm = (): boolean => {
	// Сброс ошибок
	validationErrors.name = ''
	validationErrors.email = ''
	validationErrors.phone = ''
	validationErrors.telegram = ''

	let isValid = true

	// Проверка имени
	if (!form.name.trim()) {
		validationErrors.name = 'Укажите ваше имя'
		isValid = false
	} else if (form.name.trim().length < 2) {
		validationErrors.name = 'Имя должно быть не менее 2 символов'
		isValid = false
	}

	// Проверка email
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!form.email.trim()) {
		validationErrors.email = 'Укажите email'
		isValid = false
	} else if (!emailRegex.test(form.email)) {
		validationErrors.email = 'Некорректный email адрес'
		isValid = false
	}

	// Проверка телефона
	const phoneRegex = /^[\d\s+()-]+$/
	if (!form.phone.trim()) {
		validationErrors.phone = 'Укажите телефон'
		isValid = false
	} else if (form.phone.trim().length < 10) {
		validationErrors.phone = 'Телефон должен содержать минимум 10 цифр'
		isValid = false
	} else if (!phoneRegex.test(form.phone)) {
		validationErrors.phone = 'Некорректный формат телефона'
		isValid = false
	}

	// Проверка Telegram
	if (!form.telegram.trim()) {
		validationErrors.telegram = 'Укажите Telegram'
		isValid = false
	} else if (
		!form.telegram.startsWith('@') &&
		!form.telegram.startsWith('https://t.me/')
	) {
		validationErrors.telegram = 'Начните с @ или укажите ссылку t.me'
		isValid = false
	}

	return isValid
}

const handleSubmit = async () => {
	// Валидация перед отправкой
	if (!validateForm()) {
		errorMessage.value = 'Пожалуйста, исправьте ошибки в форме'
		setTimeout(() => {
			errorMessage.value = ''
		}, 3000)
		return
	}

	isSubmitting.value = true
	successMessage.value = ''
	errorMessage.value = ''

	try {
		await $fetch('/api/order', {
			method: 'POST',
			body: {
				name: form.name,
				email: form.email,
				phone: form.phone,
				telegram: form.telegram,
				message: form.message,
			},
		})

		successMessage.value =
			'Сообщение успешно отправлено! Свяжусь с вами в ближайшее время.'

		// Очистка формы
		form.name = ''
		form.email = ''
		form.phone = ''
		form.telegram = ''
		form.message = ''

		// Скрываем сообщение через 5 секунд
		setTimeout(() => {
			successMessage.value = ''
		}, 5000)
	} catch (error: unknown) {
		const err = error as { data?: { message?: string } }
		errorMessage.value =
			err?.data?.message || 'Произошла ошибка при отправке. Попробуйте позже.'

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
@use '~/assets/styles/components/contact-section';
</style>
