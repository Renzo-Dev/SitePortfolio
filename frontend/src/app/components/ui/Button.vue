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
	transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	cursor: pointer;
	white-space: nowrap;
	user-select: none; // Убираем выделение текста
	-webkit-user-select: none;
	-moz-user-select: none;
	position: relative;
	overflow: hidden;

	// Ripple эффект при клике
	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.4);
		transform: translate(-50%, -50%);
		transition: width 0.6s, height 0.6s;
		pointer-events: none;
	}

	&:active::before {
		width: 300px;
		height: 300px;
		transition: width 0s, height 0s;
	}

	@include mobile {
		padding: 12px 24px;
		font-size: $text-body-sm;
	}

	// Primary (белая кнопка)
	&--primary {
		background: $accent;
		color: $bg-primary;
		border: none;
		box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);

		&:hover {
			background: $accent-hover;
			transform: translateY(-4px) scale(1.02);
			box-shadow: 0 12px 32px rgba(255, 255, 255, 0.25);
		}

		&:active {
			transform: translateY(-2px) scale(0.98);
			box-shadow: 0 6px 16px rgba(255, 255, 255, 0.15);
		}
	}

	// Secondary (outline)
	&--secondary {
		background: transparent;
		color: $text-primary;
		border: 1px solid $text-primary;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

		&:hover {
			background: rgba(255, 255, 255, 0.1);
			border-color: $accent-hover;
			transform: translateY(-4px) scale(1.02);
			box-shadow: 0 8px 24px rgba(255, 255, 255, 0.15);
		}

		&:active {
			background: rgba(255, 255, 255, 0.15);
			transform: translateY(-2px) scale(0.98);
			box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
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
