FROM node:22-alpine

WORKDIR /app

# Устанавливаем зависимости глобально для TailwindCSS
RUN npm install -g @nuxtjs/tailwindcss tailwindcss postcss autoprefixer

EXPOSE 3000

# Запускаем dev сервер
CMD ["npm", "run", "dev"]
