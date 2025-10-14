<template>
	<NuxtLayout name="default">
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
// Глобальная настройка скролла
onMounted(() => {
	document.documentElement.classList.add('scroll-smooth')
})
</script>
