<template>
	<div class="layout">
		<TheHeader />
		<main class="layout__main">
			<slot />
		</main>
		<TheFooter />
	</div>
</template>

<style lang="scss" scoped>
.layout {
	min-height: 100vh;
	display: flex;
	flex-direction: column;

	&__main {
		flex: 1;
		padding-top: 76px; // Отступ для fixed header

		@include respond-to('md') {
			padding-top: 84px;
		}
	}
}
</style>
