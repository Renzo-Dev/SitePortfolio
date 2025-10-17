<template>
	<div class="input-wrapper">
		<label v-if="label" :for="inputId" class="input-label">
			{{ label }}
		</label>
		<input
			v-if="type !== 'textarea'"
			:id="inputId"
			:type="type"
			:value="modelValue"
			:placeholder="placeholder"
			:required="required"
			class="input"
			@input="
				$emit('update:modelValue', ($event.target as HTMLInputElement).value)
			"
		/>
		<textarea
			v-else
			:id="inputId"
			:value="modelValue"
			:placeholder="placeholder"
			:required="required"
			:rows="rows"
			class="input input--textarea"
			@input="
				$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
			"
		/>
	</div>
</template>

<script setup lang="ts">
// UI компонент input/textarea

const props = withDefaults(
	defineProps<{
		modelValue: string
		type?: string
		label?: string
		placeholder?: string
		required?: boolean
		rows?: number
	}>(),
	{
		type: 'text',
		rows: 5,
	}
)

defineEmits<{
	'update:modelValue': [value: string]
}>()

// Используем useId() для SSR-совместимого уникального ID
const inputId = useId()
</script>

<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

.input-wrapper {
	display: flex;
	flex-direction: column;
	gap: $spacing-sm;
}

.input-label {
	font-size: $text-body-sm;
	font-weight: 500;
	color: $text-secondary;
}

.input {
	width: 100%;
	padding: 14px 16px;
	background: transparent;
	border: 1px solid $border;
	border-radius: $radius-sm;
	color: $text-primary;
	font-size: $text-body;
	font-family: $font-body;
	transition: all $transition-base;

	&::placeholder {
		color: $text-muted;
	}

	&:focus {
		outline: none;
		border-color: $text-primary;
		box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
	}

	&--textarea {
		resize: vertical;
		min-height: 120px;
	}
}
</style>
