<template>
	<Transition name="fade-scale">
		<button
			v-if="isVisible"
			aria-label="Scroll to top"
			class="scroll-to-top"
			@click="scrollToTop"
		>
			<Icon name="mdi:arrow-up" size="24" />
		</button>
	</Transition>
</template>

<script setup lang="ts">
// Показываем кнопку при скролле > 300px
const isVisible = ref(false)

const checkScroll = () => {
	isVisible.value = window.scrollY > 300
}

onMounted(() => {
	window.addEventListener('scroll', checkScroll, { passive: true })
})

onUnmounted(() => {
	window.removeEventListener('scroll', checkScroll)
})

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' }) // Плавный скролл наверх
}
</script>

<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

.scroll-to-top {
	position: fixed;
	bottom: $spacing-xl;
	right: $spacing-xl;
	width: 56px;
	height: 56px;
	background: $accent;
	color: $bg-primary;
	border: none;
	border-radius: $radius-md;
	cursor: pointer;
	z-index: $z-fixed;
	@include flex-center;
	box-shadow: $shadow-lg;
	transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
		box-shadow 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 32px rgba(255, 255, 255, 0.3);
	}

	&:active {
		transform: translateY(-2px);
	}

	@include mobile {
		width: 48px;
		height: 48px;
		bottom: $spacing-lg;
		right: $spacing-lg;
	}
}

// Transition анимации
.fade-scale-enter-active,
.fade-scale-leave-active {
	transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
		transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-scale-enter-from,
.fade-scale-leave-to {
	opacity: 0;
	transform: scale(0.7) translateY(20px);
}
</style>
