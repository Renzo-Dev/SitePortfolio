<template>
	<span class="badge" :class="`badge--${variant}`">
		<slot />
	</span>
</template>

<script setup lang="ts">
// UI компонент badge для технологий
withDefaults(
	defineProps<{
		variant?: 'primary' | 'secondary'
	}>(),
	{
		variant: 'primary',
	}
)
</script>

<style scoped lang="scss">
@use '~/assets/styles/components/badge';
</style>
