<template>
  <div class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] noise-layer">
    <NuxtRouteAnnouncer />
    <SiteHeader />
    <main class="pt-28 md:pt-32">
      <NuxtPage />
    </main>
    <SiteFooter />
    <BackToTop />
  </div>
</template>
