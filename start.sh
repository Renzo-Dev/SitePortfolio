#!/bin/bash

# Скрипт для запуска портфолио проекта
echo "🚀 Запуск Dan Koshevoy Portfolio..."

# Проверяем наличие Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker не установлен. Установите Docker и попробуйте снова."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose не установлен. Установите Docker Compose и попробуйте снова."
    exit 1
fi

# Создаем .env файл если его нет
if [ ! -f .env ]; then
    echo "📝 Создаем .env файл..."
    cat > .env << EOF
# Основные настройки
NODE_ENV=production
NUXT_HOST=0.0.0.0
NUXT_PORT=3000

# База данных SQLite
DATABASE_URL=file:./data/portfolio.db

# Telegram Bot для заказов
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here

# Настройки сайта
SITE_NAME="Dan Koshevoy - Portfolio"
SITE_URL=http://localhost
SITE_EMAIL=dankoshevoy@gmail.com
SITE_TELEGRAM=@renzo_dev

# Безопасность
JWT_SECRET=$(openssl rand -base64 32)
API_SECRET=$(openssl rand -base64 32)
EOF
    echo "✅ .env файл создан. Отредактируйте его с вашими настройками."
fi

# Создаем папку для данных
mkdir -p data

# Останавливаем существующие контейнеры
echo "🛑 Останавливаем существующие контейнеры..."
docker-compose down

# Собираем и запускаем проект
echo "🔨 Собираем Docker образы..."
docker-compose build

echo "🚀 Запускаем проект..."
docker-compose up -d

# Ждем запуска сервисов
echo "⏳ Ждем запуска сервисов..."
sleep 5

# Проверяем статус
echo "📊 Статус сервисов:"
docker-compose ps

echo ""
echo "✅ Проект запущен!"
echo "🌐 Откройте в браузере: http://localhost"
echo "📝 Логи: docker-compose logs -f"
echo "🛑 Остановка: docker-compose down"
