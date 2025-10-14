<template>
	<component :is="tag" :class="cardClasses" @click="handleClick">
		<slot />
	</component>
</template>

<script setup lang="ts">
// Пропсы компонента
interface Props {
	variant?: 'flat' | 'elevated' | 'outlined'
	hoverable?: boolean
	clickable?: boolean
	tag?: string
}

const props = withDefaults(defineProps<Props>(), {
	variant: 'elevated',
	hoverable: false,
	clickable: false,
	tag: 'div',
})

// Эмиты
const emit = defineEmits<{
	click: [event: MouseEvent]
}>()

// Вычисляемые классы
const cardClasses = computed(() => [
	'card',
	`card--${props.variant}`,
	{
		'card--hoverable': props.hoverable || props.clickable,
		'card--clickable': props.clickable,
	},
])

// Обработчик клика
const handleClick = (event: MouseEvent) => {
	if (props.clickable) {
		emit('click', event)
	}
}
</script>

<style lang="scss" scoped>
.card {
	border-radius: $rounded-xl;
	padding: $space-6;
	@include transition(all);

	@include respond-to('md') {
		padding: $space-8;
	}

	// Варианты
	&--flat {
		background-color: $light;
		box-shadow: none;
	}

	&--elevated {
		background-color: $white;
		@include card-shadow('md');
	}

	&--outlined {
		background-color: $white;
		border: 2px solid $light;
		box-shadow: none;
	}

	// Hover эффект
	&--hoverable {
		&:hover {
			transform: translateY(-4px);
			box-shadow: $shadow-xl;
		}
	}

	// Кликабельная карточка
	&--clickable {
		cursor: pointer;

		&:active {
			transform: translateY(-2px);
		}

		&:focus-visible {
			@include focus-ring;
		}
	}
}
</style>
