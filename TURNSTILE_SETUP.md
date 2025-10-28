# Настройка Cloudflare Turnstile

## Получение ключей

1. Перейдите на https://dash.cloudflare.com/
2. Выберите ваш сайт
3. Перейдите в раздел **Turnstile**
4. Создайте новый виджет
5. Скопируйте **Site Key** и **Secret Key**

## Настройка переменных окружения

Добавьте в `.env`:

```env
# Cloudflare Turnstile
NUXT_TURNSTILE_SECRET_KEY=your_turnstile_secret_key_here
NUXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key_here

# Telegram Bot (если еще не настроен)
NUXT_TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
NUXT_TELEGRAM_CHAT_ID=your_telegram_chat_id_here
```

## Как это работает

1. **Frontend** (`ContactSection.vue`):

   - Виджет Turnstile загружается в форму
   - Пользователь проходит проверку
   - Получаем токен и отправляем с формой

2. **Backend** (`order.post.ts`):

   - Проверяем наличие токена
   - Валидируем токен через Cloudflare API
   - Только после успешной проверки отправляем в Telegram

3. **Безопасность**:
   - Secret Key хранится только на сервере
   - Site Key публичный (можно коммитить)
   - Токен одноразовый и истекает

## Тестовый режим

Для разработки используйте тестовые ключи:

- Site Key: `1x00000000000000000000AA` (всегда проходит)
- Secret Key: `1x0000000000000000000000000000000AA`
