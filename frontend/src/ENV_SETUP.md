# Настройка переменных окружения для Telegram Bot

## Шаг 1: Создать `.env` файл

Создай файл `.env` в директории `/home/renzo/SitePortfolio/frontend/src/` со следующим содержимым:

```env
# Telegram Bot Configuration
NUXT_TELEGRAM_BOT_TOKEN=your_bot_token_here
NUXT_TELEGRAM_CHAT_ID=your_chat_id_here
```

## Шаг 2: Получить Bot Token

1. Открой Telegram и найди бота **[@BotFather](https://t.me/botfather)**
2. Отправь команду: `/newbot`
3. Придумай имя для бота (например: "Portfolio Contact Bot")
4. Придумай username (должен заканчиваться на `bot`, например: `my_portfolio_contact_bot`)
5. Получишь токен вида: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`
6. Вставь его в `NUXT_TELEGRAM_BOT_TOKEN`

## Шаг 3: Получить Chat ID

1. Отправь своему боту любое сообщение (например: `/start`)
2. Открой в браузере:
   ```
   https://api.telegram.org/bot<ТВОЙ_ТОКЕН>/getUpdates
   ```
   (замени `<ТВОЙ_ТОКЕН>` на токен из шага 2)
3. Найди в JSON ответе `"chat":{"id": число}`
4. Скопируй это число (например: `123456789`)
5. Вставь его в `NUXT_TELEGRAM_CHAT_ID`

## Шаг 4: Проверка

После настройки твой `.env` файл должен выглядеть так:

```env
NUXT_TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
NUXT_TELEGRAM_CHAT_ID=123456789
```

## Готово! 🚀

Перезапусти dev сервер, и форма контактов будет отправлять сообщения в твой Telegram!

---

**Важно:** Не коммить `.env` файл в git! Он должен быть в `.gitignore`.
