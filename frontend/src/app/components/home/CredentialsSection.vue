<template>
	<section id="credentials" class="credentials section">
		<div class="container">
			<h2 class="credentials__title text-center">
				<Icon name="ph:certificate-duotone" size="32" />
				Образование и сертификаты
			</h2>
			<p class="credentials__subtitle text-center text-secondary">
				Подтверждённая квалификация и постоянное развитие
			</p>

			<!-- Образование -->
			<div class="credentials__education">
				<div class="education-card">
					<div class="education-card__icon">
						<Icon name="ph:graduation-cap-duotone" size="64" />
					</div>
					<div class="education-card__content">
						<h3 class="education-card__degree">
							{{ education.degree }}
						</h3>
						<div class="education-card__university">
							{{ education.university }}
						</div>
						<div class="education-card__specialty">
							{{ education.specialty }}
						</div>
						<div class="education-card__years">
							{{ education.years }}
						</div>
					</div>
					<div class="education-card__diploma">
						<div class="diploma-preview">
							<img
								v-if="education.diploma"
								:src="education.diploma"
								:alt="`Диплом ${education.university}`"
								class="diploma-preview__image"
								@click="openDiploma"
							/>
							<div v-else class="diploma-preview__placeholder">
								<Icon name="ph:file-pdf-duotone" size="48" />
								<span>Диплом</span>
							</div>
							<button
								v-if="education.diploma"
								class="diploma-preview__button"
								@click="openDiploma"
							>
								<Icon name="ph:eye" size="20" />
								Посмотреть
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Сертификаты -->
			<div class="credentials__certificates">
				<h3 class="credentials__section-title">
					<Icon name="ph:seal-check-duotone" size="24" />
					Профессиональные сертификаты
				</h3>
				<div class="certificates-grid">
					<div
						v-for="(cert, index) in certificates"
						:key="index"
						class="certificate-card"
						@click="openCertificate(cert)"
					>
						<div class="certificate-card__preview">
							<img
								v-if="cert.image"
								:src="cert.image"
								:alt="cert.title"
								class="certificate-card__image"
							/>
							<div v-else class="certificate-card__placeholder">
								<Icon name="ph:certificate" size="48" />
							</div>
						</div>
						<div class="certificate-card__content">
							<h4 class="certificate-card__title">{{ cert.title }}</h4>
							<div class="certificate-card__issuer">
								{{ cert.issuer }}
							</div>
							<div class="certificate-card__meta">
								<span class="certificate-card__date">
									<Icon name="ph:calendar-blank" size="16" />
									{{ cert.date }}
								</span>
								<span v-if="cert.verifyLink" class="certificate-card__verify">
									<Icon name="ph:link" size="16" />
									Верификация
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Модальное окно для просмотра -->
		<Teleport to="body">
			<div v-if="isModalOpen" class="credentials-modal" @click="closeModal">
				<div class="credentials-modal__overlay"></div>
				<div class="credentials-modal__content" @click.stop>
					<button class="credentials-modal__close" @click="closeModal">
						<Icon name="ph:x" size="24" />
					</button>
					<img
						v-if="selectedImage"
						:src="selectedImage"
						:alt="selectedTitle"
						class="credentials-modal__image"
					/>
				</div>
			</div>
		</Teleport>
	</section>
</template>

<script setup lang="ts">
// Данные образования
const education = {
	degree: 'Бакалавр / Магистр', // Замени на свою степень
	university: 'Название университета', // Замени на свой ВУЗ
	specialty: 'Специальность / Направление', // Замени
	years: '2015 - 2019', // Замени
	diploma: '', // Путь к фото диплома (добавишь позже)
}

// Данные сертификатов
const certificates = [
	{
		title: 'Название сертификата 1',
		issuer: 'Платформа / Организация',
		date: 'Месяц Год',
		image: '', // Путь к фото сертификата
		verifyLink: '', // Ссылка на верификацию (опционально)
	},
	{
		title: 'Название сертификата 2',
		issuer: 'Платформа / Организация',
		date: 'Месяц Год',
		image: '',
		verifyLink: '',
	},
	{
		title: 'Название сертификата 3',
		issuer: 'Платформа / Организация',
		date: 'Месяц Год',
		image: '',
		verifyLink: '',
	},
]

// Модальное окно
const isModalOpen = ref(false)
const selectedImage = ref('')
const selectedTitle = ref('')

const openDiploma = () => {
	if (education.diploma) {
		selectedImage.value = education.diploma
		selectedTitle.value = `Диплом ${education.university}`
		isModalOpen.value = true
	}
}

const openCertificate = (cert: (typeof certificates)[0]) => {
	if (cert.image) {
		selectedImage.value = cert.image
		selectedTitle.value = cert.title
		isModalOpen.value = true
	} else if (cert.verifyLink) {
		window.open(cert.verifyLink, '_blank')
	}
}

const closeModal = () => {
	isModalOpen.value = false
	selectedImage.value = ''
	selectedTitle.value = ''
}

// Закрытие модалки по Escape
onMounted(() => {
	const handleEscape = (e: KeyboardEvent) => {
		if (e.key === 'Escape') closeModal()
	}
	window.addEventListener('keydown', handleEscape)
	onUnmounted(() => {
		window.removeEventListener('keydown', handleEscape)
	})
})
</script>

<style scoped lang="scss">
@use '~/assets/styles/components/credentials-section';
</style>
