<template>
	<button :class="buttonClasses" :disabled="disabled || loading" :type="type">
		<!-- Иконка загрузки -->
		<span v-if="loading" class="button__loader">
			<Icon name="svg-spinners:ring-resize" />
		</span>

		<!-- Иконка слева -->
		<Icon
			v-if="iconLeft && !loading"
			:name="iconLeft"
			class="button__icon button__icon--left"
		/>

		<!-- Контент кнопки -->
		<span v-if="$slots.default" class="button__content">
			<slot />
		</span>

		<!-- Иконка справа -->
		<Icon
			v-if="iconRight && !loading"
			:name="iconRight"
			class="button__icon button__icon--right"
		/>
	</button>
</template>

<script setup lang="ts">
// Пропсы компонента
interface Props {
	variant?: 'primary' | 'secondary' | 'ghost' | 'icon-only'
	size?: 'sm' | 'md' | 'lg'
	disabled?: boolean
	loading?: boolean
	type?: 'button' | 'submit' | 'reset'
	iconLeft?: string
	iconRight?: string
}

const props = withDefaults(defineProps<Props>(), {
	variant: 'primary',
	size: 'md',
	disabled: false,
	loading: false,
	type: 'button',
})

// Вычисляемые классы
const buttonClasses = computed(() => [
	'button',
	`button--${props.variant}`,
	`button--${props.size}`,
	{
		'button--loading': props.loading,
		'button--disabled': props.disabled,
		'button--icon-only': props.variant === 'icon-only',
	},
])
</script>

<style lang="scss" scoped>
.button {
	@include reset-button;
	@include transition(all);
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: $space-2;
	font-weight: 500;
	border-radius: $rounded-lg;
	cursor: pointer;
	position: relative;

	// Размеры
	&--sm {
		padding: $space-2 $space-4;
		font-size: $text-sm;
		min-height: 32px;
	}

	&--md {
		padding: $space-3 $space-6;
		font-size: $text-base;
		min-height: 44px;
	}

	&--lg {
		padding: $space-4 $space-8;
		font-size: $text-lg;
		min-height: 52px;
	}

	// Варианты
	&--primary {
		background-color: $primary;
		color: $white;

		&:hover:not(:disabled) {
			background-color: darken($primary, 10%);
			transform: translateY(-2px);
			box-shadow: $shadow-lg;
		}

		&:active:not(:disabled) {
			transform: translateY(0);
		}
	}

	&--secondary {
		background-color: $secondary;
		color: $white;

		&:hover:not(:disabled) {
			background-color: darken($secondary, 10%);
			transform: translateY(-2px);
			box-shadow: $shadow-lg;
		}
	}

	&--ghost {
		background-color: transparent;
		color: $primary;
		border: 2px solid $primary;

		&:hover:not(:disabled) {
			background-color: rgba($primary, 0.1);
		}
	}

	&--icon-only {
		padding: $space-3;
		min-width: 44px;
		min-height: 44px;

		&.button--sm {
			padding: $space-2;
			min-width: 32px;
			min-height: 32px;
		}

		&.button--lg {
			padding: $space-4;
			min-width: 52px;
			min-height: 52px;
		}
	}

	// Состояния
	&--disabled,
	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		pointer-events: none;
	}

	&--loading {
		cursor: wait;
	}

	// Focus состояние (a11y)
	&:focus-visible {
		@include focus-ring;
	}

	// Элементы
	&__loader {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
	}

	&__icon {
		display: flex;
		font-size: 20px;

		&--left {
			margin-right: -$space-1;
		}

		&--right {
			margin-left: -$space-1;
		}
	}

	&__content {
		display: flex;
		align-items: center;
	}
}
</style>
