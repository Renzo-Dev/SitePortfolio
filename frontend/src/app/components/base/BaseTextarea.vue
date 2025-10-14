<template>
	<div class="textarea-wrapper">
		<!-- Лейбл -->
		<label v-if="label" :for="textareaId" class="textarea-label">
			{{ label }}
			<span v-if="required" class="textarea-label__required">*</span>
		</label>

		<!-- Textarea -->
		<div class="textarea-container" :class="containerClasses">
			<textarea
				:id="textareaId"
				v-model="textareaValue"
				:placeholder="placeholder"
				:disabled="disabled"
				:required="required"
				:rows="rows"
				:class="textareaClasses"
				@blur="handleBlur"
				@focus="handleFocus"
			/>
		</div>

		<!-- Сообщение об ошибке -->
		<p v-if="error" class="textarea-error">{{ error }}</p>

		<!-- Подсказка -->
		<p v-else-if="hint" class="textarea-hint">{{ hint }}</p>
	</div>
</template>

<script setup lang="ts">
// Пропсы компонента
interface Props {
	modelValue?: string
	label?: string
	placeholder?: string
	error?: string
	hint?: string
	disabled?: boolean
	required?: boolean
	rows?: number
}

const props = withDefaults(defineProps<Props>(), {
	modelValue: '',
	rows: 4,
})

// Эмиты
const emit = defineEmits<{
	'update:modelValue': [value: string]
	blur: [event: FocusEvent]
	focus: [event: FocusEvent]
}>()

// Состояния
const isFocused = ref(false)
const textareaId = computed(
	() => `textarea-${Math.random().toString(36).substring(7)}`
)

// V-model
const textareaValue = computed({
	get: () => props.modelValue,
	set: (value) => emit('update:modelValue', value),
})

// Классы
const textareaClasses = computed(() => [
	'textarea',
	{
		'textarea--disabled': props.disabled,
		'textarea--error': props.error,
	},
])

const containerClasses = computed(() => ({
	'textarea-container--focused': isFocused.value,
	'textarea-container--error': props.error,
	'textarea-container--disabled': props.disabled,
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
.textarea-wrapper {
	display: flex;
	flex-direction: column;
	gap: $space-2;
}

.textarea-label {
	font-size: $text-sm;
	font-weight: 500;
	color: $dark;

	&__required {
		color: $error;
	}
}

.textarea-container {
	border: 2px solid $light;
	border-radius: $rounded-lg;
	background-color: $white;
	@include transition(border-color box-shadow);
	padding: $space-3 $space-4;

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

.textarea {
	width: 100%;
	border: none;
	outline: none;
	font-size: $text-base;
	color: $dark;
	background-color: transparent;
	resize: vertical;
	min-height: 100px;
	font-family: inherit;
	line-height: 1.6;

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

.textarea-error {
	font-size: $text-sm;
	color: $error;
	margin: 0;
}

.textarea-hint {
	font-size: $text-sm;
	color: $gray;
	margin: 0;
}
</style>
