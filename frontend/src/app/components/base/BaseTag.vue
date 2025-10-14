<template>
	<span :class="tagClasses">
		<Icon v-if="icon" :name="icon" class="tag__icon" />
		<span class="tag__content">
			<slot />
		</span>
	</span>
</template>

<script setup lang="ts">
// Пропсы компонента
interface Props {
	variant?: 'filled' | 'outlined'
	category?: 'frontend' | 'backend' | 'devops' | 'default'
	icon?: string
}

const props = withDefaults(defineProps<Props>(), {
	variant: 'filled',
	category: 'default',
})

// Вычисляемые классы
const tagClasses = computed(() => [
	'tag',
	`tag--${props.variant}`,
	`tag--${props.category}`,
])
</script>

<style lang="scss" scoped>
.tag {
	display: inline-flex;
	align-items: center;
	gap: $space-1;
	padding: $space-1 $space-3;
	border-radius: $rounded-full;
	font-size: $text-sm;
	font-weight: 500;
	@include transition(all);

	// Filled варианты
	&--filled {
		&.tag--frontend {
			background-color: rgba($primary, 0.1);
			color: $primary;
		}

		&.tag--backend {
			background-color: rgba($secondary, 0.1);
			color: darken($secondary, 10%);
		}

		&.tag--devops {
			background-color: rgba(#f59e0b, 0.1);
			color: #d97706;
		}

		&.tag--default {
			background-color: rgba($gray, 0.1);
			color: $dark;
		}

		&:hover {
			transform: scale(1.05);
		}
	}

	// Outlined варианты
	&--outlined {
		background-color: transparent;
		border: 1.5px solid;

		&.tag--frontend {
			border-color: $primary;
			color: $primary;
		}

		&.tag--backend {
			border-color: $secondary;
			color: $secondary;
		}

		&.tag--devops {
			border-color: #f59e0b;
			color: #f59e0b;
		}

		&.tag--default {
			border-color: $gray;
			color: $gray;
		}

		&:hover {
			transform: scale(1.05);
			box-shadow: $shadow-sm;
		}
	}

	// Элементы
	&__icon {
		font-size: 16px;
		display: flex;
	}

	&__content {
		white-space: nowrap;
	}
}
</style>
