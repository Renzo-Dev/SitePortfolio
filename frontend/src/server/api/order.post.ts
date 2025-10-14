// API endpoint для отправки заказов в Telegram

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const body = await readBody(event)

	// Валидация данных
	if (!body.name || !body.email || !body.message) {
		throw createError({
			statusCode: 400,
			message: 'Все поля обязательны для заполнения',
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
	const message = `
🔔 Новый заказ с сайта!

👤 Имя: ${body.name}
📧 Email: ${body.email}

💬 Сообщение:
${body.message}

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
	} catch (error: any) {
		console.error('Telegram API Error:', error)

		throw createError({
			statusCode: 500,
			message: 'Ошибка при отправке сообщения. Попробуйте позже.',
		})
	}
})
