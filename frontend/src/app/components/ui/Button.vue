<template>
	<button :class="['btn', `btn--${variant}`, { 'btn--magnetic': magnetic }]">
		<slot />
	</button>
</template>

<script setup lang="ts">
// UI компонент кнопки с 3 вариантами

withDefaults(
	defineProps<{
		variant?: 'primary' | 'secondary' | 'ghost'
		magnetic?: boolean
	}>(),
	{
		variant: 'primary',
		magnetic: false,
	}
)
</script>

<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

.btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: $spacing-sm;
	padding: 14px 32px;
	border-radius: $radius-sm;
	font-size: $text-body;
	font-weight: 600;
	transition: all $transition-base;
	cursor: pointer;
	white-space: nowrap;

	@include mobile {
		padding: 12px 24px;
		font-size: $text-body-sm;
	}

	// Primary (белая кнопка)
	&--primary {
		background: $accent;
		color: $bg-primary;
		border: none;

		&:hover {
			background: $accent-hover;
			transform: translateY(-2px);
			box-shadow: 0 8px 24px rgba(255, 255, 255, 0.15);
		}

		&:active {
			transform: translateY(0);
		}
	}

	// Secondary (outline)
	&--secondary {
		background: transparent;
		color: $text-primary;
		border: 1px solid $text-primary;

		&:hover {
			background: rgba(255, 255, 255, 0.1);
			border-color: $accent-hover;
		}

		&:active {
			background: rgba(255, 255, 255, 0.15);
		}
	}

	// Ghost (прозрачная)
	&--ghost {
		background: transparent;
		color: $text-secondary;
		border: none;

		&:hover {
			color: $text-primary;
			background: rgba(255, 255, 255, 0.05);
		}

		&:active {
			background: rgba(255, 255, 255, 0.1);
		}
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		pointer-events: none;
	}
}
</style>
