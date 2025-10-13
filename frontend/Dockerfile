FROM node:22-alpine

WORKDIR /app

# Копируем package.json и package-lock.json
COPY src/package*.json ./

# Устанавливаем зависимости (включая TailwindCSS)
RUN npm install

# Генерируем типы Nuxt
RUN npm run postinstall

EXPOSE 3000

# Запускаем dev сервер
CMD ["npm", "run", "dev"]
