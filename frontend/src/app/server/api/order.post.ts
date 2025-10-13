// API для отправки заявок с формы в Telegram
import { z } from 'zod'

// Схема валидации входящих данных
const orderSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  telegram: z.string().optional(),
  message: z.string().min(10)
})

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const token = config.telegramToken

  // Проверка наличия токена
  if (!token) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Отсутствует TELEGRAM_TOKEN'
    })
  }

  // Валидация данных от клиента
  const body = await readBody(event)
  const result = orderSchema.safeParse(body)

  if (!result.success) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Некорректные данные',
      data: result.error.flatten()
    })
  }

  const payload = result.data

  // Формируем сообщение для Telegram
  const message = `🆕 Новый lead с сайта\n\n` +
    `Имя: ${payload.name}\n` +
    `Email: ${payload.email}\n` +
    `Telegram: ${payload.telegram || 'не указан'}\n` +
    `Запрос: ${payload.message}`

  // Отправляем в Telegram Bot API
  await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    body: {
      chat_id: config.public.telegramChatId,
      text: message,
      parse_mode: 'Markdown'
    }
  })

  return { status: 'ok' }
})

