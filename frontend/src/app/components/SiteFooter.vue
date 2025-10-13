<template>
  <footer class="site-footer">
    <div class="layout-container grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
      <div class="space-y-4">
        <h3 class="font-display text-xl text-[var(--color-text-primary)]">
          Готов обсудить ваш продукт
        </h3>
        <p>Связь в течение рабочего дня. Предпочитаю Telegram, на email даю развёрнутый ответ.</p>
        <div class="flex flex-wrap gap-4 text-sm">
          <a href="mailto:dankoshevoy@gmail.com" class="btn-secondary">Email</a>
          <a href="https://t.me/renzo_pw" target="_blank" rel="noopener" class="btn-primary">Telegram</a>
        </div>
      </div>

      <div class="grid gap-3 text-sm text-[var(--color-text-muted)]">
        <p>© {{ new Date().getFullYear() }} Dan Koshevoy. Разработка с вниманием к деталям.</p>
        <p class="text-xs">
          Сайт развёрнут на VPS в Docker, Nuxt 4 + Laravel, оптимизирован для Lighthouse 90+
        </p>
      </div>
    </div>
  </footer>
</template>

