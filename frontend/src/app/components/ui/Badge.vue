<template>
	<span class="badge">
		<slot />
	</span>
</template>

<script setup lang="ts">
// UI компонент badge для технологий
</script>

<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

.badge {
	display: inline-flex;
	align-items: center;
	gap: $spacing-xs;
	padding: 6px 14px;
	background: rgba(255, 255, 255, 0.1);
	color: $text-primary;
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: $radius-full;
	font-size: $text-body-sm;
	font-weight: 500;
	transition: all $transition-base;
	white-space: nowrap;

	&:hover {
		background: rgba(255, 255, 255, 0.15);
		transform: translateY(-1px);
	}
}
</style>
