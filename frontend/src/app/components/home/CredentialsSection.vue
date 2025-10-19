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
							<div
								v-if="education.diplomaFiles?.length"
								class="diploma-preview__pdf"
								@click="openDiploma"
							>
								<Icon name="ph:file-pdf-duotone" size="64" />
								<span class="diploma-preview__pdf-label">
									Диплом ({{ education.diplomaFiles.length }} стр.)
								</span>
							</div>
							<div v-else class="diploma-preview__placeholder">
								<Icon name="ph:file-pdf-duotone" size="48" />
								<span>Диплом</span>
							</div>
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
							<!-- PDF превью -->
							<div
								v-if="cert.image && cert.image.endsWith('.pdf')"
								class="certificate-card__pdf-preview"
							>
								<Icon name="ph:file-pdf-duotone" size="56" />
								<span class="certificate-card__pdf-label">PDF</span>
							</div>
							<!-- Изображение -->
							<img
								v-else-if="cert.image"
								:src="cert.image"
								:alt="cert.title"
								class="certificate-card__image"
							/>
							<!-- Placeholder -->
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
			<div
				v-if="isModalOpen"
				class="credentials-modal"
				@click="closeModal"
				@touchstart="handleTouchStart"
				@touchend="handleTouchEnd"
			>
				<div class="credentials-modal__overlay" />
				<div class="credentials-modal__content" @click.stop>
					<!-- Десктопная версия -->
					<div class="credentials-modal__desktop-wrapper">
						<button class="credentials-modal__close" @click="closeModal">
							<Icon name="ph:x" size="24" />
						</button>

						<!-- Навигация для нескольких файлов (десктоп) -->
						<div v-if="currentFiles.length > 1" class="credentials-modal__nav">
							<button
								class="credentials-modal__nav-btn credentials-modal__nav-btn--prev"
								:disabled="currentFileIndex === 0"
								@click="prevFile"
							>
								<Icon name="ph:caret-left" size="32" />
							</button>
							<div class="credentials-modal__counter">
								{{ currentFileIndex + 1 }} / {{ currentFiles.length }}
							</div>
							<button
								class="credentials-modal__nav-btn credentials-modal__nav-btn--next"
								:disabled="currentFileIndex === currentFiles.length - 1"
								@click="nextFile"
							>
								<Icon name="ph:caret-right" size="32" />
							</button>
						</div>

						<!-- PDF или изображение (десктоп) -->
						<iframe
							v-if="isPdfFile"
							:src="currentFile"
							class="credentials-modal__pdf"
							frameborder="0"
						/>
						<img
							v-else-if="currentFile"
							:src="currentFile"
							:alt="selectedTitle"
							class="credentials-modal__image"
						/>
					</div>

					<!-- Мобильная версия -->
					<div class="credentials-modal__mobile-wrapper">
						<!-- Header с кнопкой закрытия -->
						<div class="credentials-modal__mobile-header">
							<button class="credentials-modal__close" @click="closeModal">
								<Icon name="ph:x" size="24" />
							</button>
							<div class="credentials-modal__mobile-title">
								{{ selectedTitle }}
							</div>
							<div style="width: 40px" />
							<!-- Spacer для центрирования -->
						</div>

						<!-- Область просмотра -->
						<div class="credentials-modal__viewer">
							<iframe
								v-if="isPdfFile"
								:src="currentFile"
								class="credentials-modal__pdf"
								frameborder="0"
							/>
							<img
								v-else-if="currentFile"
								:src="currentFile"
								:alt="selectedTitle"
								class="credentials-modal__image"
							/>
						</div>

						<!-- Навигация внизу (мобильная) -->
						<div v-if="currentFiles.length > 1" class="credentials-modal__nav">
							<button
								class="credentials-modal__nav-btn credentials-modal__nav-btn--prev"
								:disabled="currentFileIndex === 0"
								@click="prevFile"
							>
								<Icon name="ph:caret-left" size="32" />
							</button>
							<div class="credentials-modal__counter">
								{{ currentFileIndex + 1 }} / {{ currentFiles.length }}
							</div>
							<button
								class="credentials-modal__nav-btn credentials-modal__nav-btn--next"
								:disabled="currentFileIndex === currentFiles.length - 1"
								@click="nextFile"
							>
								<Icon name="ph:caret-right" size="32" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</Teleport>
	</section>
</template>

<script setup lang="ts">
// Данные образования
const education = {
	degree: 'Software Development',
	university: 'STEP Computer Academy',
	specialty: 'Разработка программного обеспечения',
	years: '2020 - 2024',
	diplomaFiles: [
		'/images/credentials/Diplom1.pdf', // Диплом (лицевая сторона)
		'/images/credentials/Diplom2.pdf', // Диплом (обратная сторона)
	],
}

// Данные сертификатов
const certificates = [
	{
		title: 'IT Essentials: PC Hardware and Software',
		issuer: 'Cisco Networking Academy',
		date: 'Декабрь 2020',
		image: '/images/credentials/IT_Essentials_Sertificat.pdf',
		verifyLink: '',
	},
]

// Модальное окно
const isModalOpen = ref(false)
const selectedTitle = ref('')
const currentFiles = ref<string[]>([])
const currentFileIndex = ref(0)

// Computed для текущего файла
const currentFile = computed(() => {
	return currentFiles.value[currentFileIndex.value] || ''
})

// Проверка, является ли файл PDF
const isPdfFile = computed(() => {
	return currentFile.value.endsWith('.pdf')
})

// Определение мобильного устройства
const isMobile = () => {
	return window.innerWidth <= 480
}

const openDiploma = () => {
	if (education.diplomaFiles && education.diplomaFiles.length > 0) {
		// На мобильных открываем первый файл напрямую в браузере
		if (isMobile()) {
			window.open(education.diplomaFiles[0], '_blank')
			return
		}

		// На десктопе открываем в модалке
		currentFiles.value = education.diplomaFiles
		currentFileIndex.value = 0
		selectedTitle.value = `Диплом ${education.university}`
		isModalOpen.value = true
	}
}

const openCertificate = (cert: (typeof certificates)[0]) => {
	if (cert.image) {
		// На мобильных открываем напрямую в браузере
		if (isMobile()) {
			window.open(cert.image, '_blank')
			return
		}

		// На десктопе открываем в модалке
		currentFiles.value = [cert.image]
		currentFileIndex.value = 0
		selectedTitle.value = cert.title
		isModalOpen.value = true
	} else if (cert.verifyLink) {
		// Если только ссылка верификации - открываем в новой вкладке
		window.open(cert.verifyLink, '_blank')
	}
}

const closeModal = () => {
	isModalOpen.value = false
	currentFiles.value = []
	currentFileIndex.value = 0
	selectedTitle.value = ''
}

// Навигация между файлами
const nextFile = () => {
	if (currentFileIndex.value < currentFiles.value.length - 1) {
		currentFileIndex.value++
	}
}

const prevFile = () => {
	if (currentFileIndex.value > 0) {
		currentFileIndex.value--
	}
}

// Обработка свайпов для навигации на мобильных
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e: TouchEvent) => {
	touchStartX = e.changedTouches[0]?.screenX ?? 0
}

const handleTouchEnd = (e: TouchEvent) => {
	touchEndX = e.changedTouches[0]?.screenX ?? 0
	handleSwipe()
}

const handleSwipe = () => {
	const swipeThreshold = 50
	const diff = touchStartX - touchEndX

	if (Math.abs(diff) > swipeThreshold) {
		if (diff > 0) {
			// Свайп влево - следующий файл
			nextFile()
		} else {
			// Свайп вправо - предыдущий файл
			prevFile()
		}
	}
}

// Закрытие модалки по Escape и навигация стрелками
onMounted(() => {
	const handleKeydown = (e: KeyboardEvent) => {
		if (!isModalOpen.value) return

		if (e.key === 'Escape') {
			closeModal()
		} else if (e.key === 'ArrowRight') {
			nextFile()
		} else if (e.key === 'ArrowLeft') {
			prevFile()
		}
	}

	window.addEventListener('keydown', handleKeydown)

	onUnmounted(() => {
		window.removeEventListener('keydown', handleKeydown)
	})
})

// Добавление touch событий для модального окна
watch(isModalOpen, (newVal) => {
	if (newVal) {
		// Блокировка скролла body при открытом модальном окне
		document.body.style.overflow = 'hidden'
	} else {
		// Разблокировка скролла
		document.body.style.overflow = ''
	}
})
</script>

<style scoped lang="scss">
@use '~/assets/styles/components/credentials-section';
</style>
