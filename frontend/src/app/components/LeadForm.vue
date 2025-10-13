<template>
  <div class="glass-card p-8">
    <form class="space-y-5" @submit.prevent="handleSubmit">
      <div class="space-y-1">
        <label for="name" class="text-xs uppercase tracking-[0.24em] text-[var(--color-text-muted)]">Имя</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-bg)]/60 px-4 py-3 text-sm focus:border-[var(--color-highlight)] focus:outline-none"
          placeholder="Как к вам обращаться"
        />
      </div>

      <div class="space-y-1">
        <label for="email" class="text-xs uppercase tracking-[0.24em] text-[var(--color-text-muted)]">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-bg)]/60 px-4 py-3 text-sm focus:border-[var(--color-highlight)] focus:outline-none"
          placeholder="Для связи"
        />
      </div>

      <div class="space-y-1">
        <label for="telegram" class="text-xs uppercase tracking-[0.24em] text-[var(--color-text-muted)]">Telegram</label>
        <input
          id="telegram"
          v-model="form.telegram"
          type="text"
          class="w-full rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-bg)]/60 px-4 py-3 text-sm focus:border-[var(--color-highlight)] focus:outline-none"
          placeholder="@ник, если удобно"
        />
      </div>

      <div class="space-y-1">
        <label for="message" class="text-xs uppercase tracking-[0.24em] text-[var(--color-text-muted)]">Задача</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          rows="4"
          class="w-full rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-bg)]/60 px-4 py-3 text-sm focus:border-[var(--color-highlight)] focus:outline-none"
          placeholder="Расскажите о продукте, сроках и задачах"
        />
      </div>

      <button type="submit" class="w-full btn-primary justify-center">
        Отправить запрос
      </button>

      <p v-if="infoMessage" :class="['text-xs', infoMessageType === 'success' ? 'text-[var(--color-accent)]' : 'text-red-400']">
        {{ infoMessage }}
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
// Форма заявки с отправкой в Telegram через API
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  telegram: '',
  message: ''
})

const infoMessage = ref('')
const infoMessageType = ref<'success' | 'error'>('success')
const isSubmitting = ref(false)

// Обработка отправки формы
const handleSubmit = async () => {
  if (isSubmitting.value) return
  infoMessage.value = ''
  isSubmitting.value = true

  try {
    // Отправляем данные на сервер
    const { status } = await $fetch('/api/order', {
      method: 'POST',
      body: form
    })

    if (status === 'ok') {
      // Очищаем форму при успехе
      Object.assign(form, { name: '', email: '', telegram: '', message: '' })
      infoMessageType.value = 'success'
      infoMessage.value = 'Запрос принят! Вернусь с ответом в течение 24 часов.'
    } else {
      throw new Error('Не удалось отправить заявку')
    }
  } catch (error) {
    console.error('Ошибка отправки:', error)
    infoMessageType.value = 'error'
    infoMessage.value = 'Не получилось отправить данные. Напишите напрямую в Telegram @renzo_dev.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

