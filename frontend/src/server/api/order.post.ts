// API endpoint для отправки заказов в Telegram

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const body = await readBody(event)

	// Проверка Turnstile токена
	if (!body.turnstileToken) {
		throw createError({
			statusCode: 400,
			message: 'Капча не пройдена',
		})
	}

	// Валидация Turnstile токена на стороне Cloudflare
	try {
		const turnstileResponse = await $fetch(
			'https://challenges.cloudflare.com/turnstile/v0/siteverify',
			{
				method: 'POST',
				body: {
					secret: config.turnstileSecretKey,
					response: body.turnstileToken,
				},
			}
		)

		if (!turnstileResponse.success) {
			throw createError({
				statusCode: 403,
				message: 'Проверка капчи не пройдена',
			})
		}
	} catch (error) {
		throw createError({
			statusCode: 403,
			message: 'Ошибка проверки капчи',
		})
	}

	// Валидация данных (сообщение необязательно)
	if (!body.name || !body.email || !body.phone || !body.telegram) {
		throw createError({
			statusCode: 400,
			message: 'Заполните все обязательные поля',
		})
	}

	// Проверка email
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!emailRegex.test(body.email)) {
		throw createError({
			statusCode: 400,
			message: 'Некорректный email адрес',
		})
	}

	// Формирование сообщения для Telegram
	const messageText = body.message?.trim()
		? `\n\n💬 Сообщение:\n${body.message}`
		: ''
	const message = `
🔔 Новый заказ с сайта!

👤 Имя: ${body.name}
📧 Email: ${body.email}
📞 Телефон: ${body.phone}
📱 Telegram: ${body.telegram}${messageText}

⏰ Время: ${new Date().toLocaleString('ru-RU')}
	`.trim()

	try {
		// Отправка в Telegram
		const telegramUrl = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`

		await $fetch(telegramUrl, {
			method: 'POST',
			body: {
				chat_id: config.telegramChatId,
				text: message,
				parse_mode: 'HTML',
			},
		})

		return {
			success: true,
			message: 'Сообщение успешно отправлено',
		}
	} catch (error: unknown) {
		// Логируем ошибку для отладки на сервере
		// В production логи идут в системный журнал
		throw createError({
			statusCode: 500,
			message: 'Ошибка при отправке сообщения. Попробуйте позже.',
			data: import.meta.dev ? error : undefined, // Детали только в dev
		})
	}
})
