<template>
	<div class="input-wrapper">
		<!-- Лейбл -->
		<label v-if="label" :for="inputId" class="input-label">
			{{ label }}
			<span v-if="required" class="input-label__required">*</span>
		</label>

		<!-- Input -->
		<div class="input-container" :class="containerClasses">
			<!-- Иконка слева -->
			<Icon
				v-if="iconLeft"
				:name="iconLeft"
				class="input__icon input__icon--left"
			/>

			<input
				:id="inputId"
				v-model="inputValue"
				:type="type"
				:placeholder="placeholder"
				:disabled="disabled"
				:required="required"
				:class="inputClasses"
				@blur="handleBlur"
				@focus="handleFocus"
			/>

			<!-- Иконка справа -->
			<Icon
				v-if="iconRight"
				:name="iconRight"
				class="input__icon input__icon--right"
			/>
		</div>

		<!-- Сообщение об ошибке -->
		<p v-if="error" class="input-error">{{ error }}</p>

		<!-- Подсказка -->
		<p v-else-if="hint" class="input-hint">{{ hint }}</p>
	</div>
</template>

<script setup lang="ts">
// Пропсы компонента
interface Props {
	modelValue?: string | number
	type?: string
	label?: string
	placeholder?: string
	error?: string
	hint?: string
	disabled?: boolean
	required?: boolean
	iconLeft?: string
	iconRight?: string
}

const props = withDefaults(defineProps<Props>(), {
	type: 'text',
	modelValue: '',
})

// Эмиты
const emit = defineEmits<{
	'update:modelValue': [value: string | number]
	blur: [event: FocusEvent]
	focus: [event: FocusEvent]
}>()

// Состояния
const isFocused = ref(false)
const inputId = computed(
	() => `input-${Math.random().toString(36).substring(7)}`
)

// V-model
const inputValue = computed({
	get: () => props.modelValue,
	set: (value) => emit('update:modelValue', value),
})

// Классы
const inputClasses = computed(() => [
	'input',
	{
		'input--disabled': props.disabled,
		'input--error': props.error,
	},
])

const containerClasses = computed(() => ({
	'input-container--focused': isFocused.value,
	'input-container--error': props.error,
	'input-container--disabled': props.disabled,
}))

// Обработчики
const handleFocus = (event: FocusEvent) => {
	isFocused.value = true
	emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
	isFocused.value = false
	emit('blur', event)
}
</script>

<style lang="scss" scoped>
.input-wrapper {
	display: flex;
	flex-direction: column;
	gap: $space-2;
}

.input-label {
	font-size: $text-sm;
	font-weight: 500;
	color: $dark;

	&__required {
		color: $error;
	}
}

.input-container {
	display: flex;
	align-items: center;
	gap: $space-2;
	border: 2px solid $light;
	border-radius: $rounded-lg;
	background-color: $white;
	@include transition(border-color box-shadow);
	padding: 0 $space-4;

	&--focused {
		border-color: $primary;
		box-shadow: 0 0 0 3px rgba($primary, 0.1);
	}

	&--error {
		border-color: $error;
	}

	&--disabled {
		background-color: $light;
		cursor: not-allowed;
	}
}

.input {
	flex: 1;
	border: none;
	outline: none;
	padding: $space-3 0;
	font-size: $text-base;
	color: $dark;
	background-color: transparent;

	&::placeholder {
		color: $gray;
	}

	&--disabled {
		cursor: not-allowed;
	}

	&--error {
		color: $error;
	}
}

.input__icon {
	font-size: 20px;
	color: $gray;
	display: flex;

	.input-container--focused & {
		color: $primary;
	}

	.input-container--error & {
		color: $error;
	}
}

.input-error {
	font-size: $text-sm;
	color: $error;
	margin: 0;
}

.input-hint {
	font-size: $text-sm;
	color: $gray;
	margin: 0;
}
</style>
