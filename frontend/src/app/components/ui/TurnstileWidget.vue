<template>
	<div class="turnstile-wrapper">
		<div ref="turnstileRef" class="turnstile-widget"></div>
		<p v-if="error" class="turnstile-error">{{ error }}</p>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	siteKey: string
	theme?: 'light' | 'dark' | 'auto'
}>()

const emit = defineEmits<{
	verified: [token: string]
	error: [error: string]
	expired: []
}>()

const turnstileRef = ref<HTMLElement | null>(null)
const widgetId = ref<string | null>(null)
const error = ref('')

// Загрузка скрипта Turnstile
const loadTurnstile = () => {
	return new Promise((resolve, reject) => {
		if (window.turnstile) {
			resolve(window.turnstile)
			return
		}

		const script = document.createElement('script')
		script.src =
			'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
		script.async = true
		script.onload = () => {
			// Ждем пока turnstile станет доступен
			const checkTurnstile = setInterval(() => {
				if (window.turnstile) {
					clearInterval(checkTurnstile)
					resolve(window.turnstile)
				}
			}, 100)
		}
		script.onerror = () => reject(new Error('Failed to load Turnstile'))
		document.head.appendChild(script)
	})
}

// Инициализация виджета
const initWidget = async () => {
	try {
		await loadTurnstile()

		if (!turnstileRef.value || !window.turnstile) {
			return
		}

		widgetId.value = window.turnstile.render(turnstileRef.value, {
			sitekey: props.siteKey,
			theme: props.theme || 'auto',
			callback: (token: string) => {
				error.value = ''
				emit('verified', token)
			},
			'error-callback': () => {
				error.value = 'Ошибка проверки. Попробуйте еще раз.'
				emit('error', error.value)
			},
			'expired-callback': () => {
				error.value = 'Проверка истекла. Пройдите заново.'
				emit('expired')
			},
		})
	} catch (err) {
		error.value = 'Не удалось загрузить капчу'
		emit('error', error.value)
	}
}

// Публичный метод для сброса виджета
const reset = () => {
	if (window.turnstile && widgetId.value) {
		window.turnstile.reset(widgetId.value)
		error.value = ''
	}
}

// Публичный метод для получения токена
const getToken = (): string | null => {
	if (window.turnstile && widgetId.value) {
		return window.turnstile.getResponse(widgetId.value)
	}
	return null
}

// Экспортируем методы для родителя
defineExpose({
	reset,
	getToken,
})

onMounted(() => {
	initWidget()
})

// Следим за изменением темы
watch(
	() => props.theme,
	() => {
		if (widgetId.value && window.turnstile) {
			window.turnstile.remove(widgetId.value)
			initWidget()
		}
	}
)
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.turnstile-wrapper {
	margin: $spacing-md 0;
}

.turnstile-widget {
	display: flex;
	justify-content: center;
	min-height: 65px;
}

.turnstile-error {
	margin-top: $spacing-sm;
	color: $error;
	font-size: $text-body-sm;
	text-align: center;
}
</style>
