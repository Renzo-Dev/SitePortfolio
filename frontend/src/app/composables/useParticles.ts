// Canvas Particles composable
export const useParticles = (canvasRef: Ref<HTMLCanvasElement | undefined>) => {
	interface Particle {
		x: number
		y: number
		vx: number
		vy: number
		radius: number
	}

	const initParticles = (options?: {
		numberOfParticles?: number
		connectionDistance?: number
		mouseRadius?: number
		particleColor?: string
		lineColor?: string
		opacity?: number
	}) => {
		const {
			numberOfParticles = 80,
			connectionDistance = 100,
			mouseRadius = 150,
			particleColor = 'rgba(255, 255, 255, 0.5)',
			lineColor = 'rgba(255, 255, 255, 0.2)',
			opacity = 1,
		} = options || {}

		if (!canvasRef.value) return

		const canvas = canvasRef.value
		const ctx = canvas.getContext('2d')
		if (!ctx) return

		// Размер canvas
		const resizeCanvas = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}
		resizeCanvas()
		window.addEventListener('resize', resizeCanvas)

		// Массив частиц
		const particlesArray: Particle[] = []
		const mouse = { x: 0, y: 0 }

		// Создание частиц
		for (let i = 0; i < numberOfParticles; i++) {
			particlesArray.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 0.5,
				vy: (Math.random() - 0.5) * 0.5,
				radius: Math.random() * 2 + 1,
			})
		}

		// Отслеживание мыши
		const handleMouseMove = (e: MouseEvent) => {
			mouse.x = e.clientX
			mouse.y = e.clientY
		}
		window.addEventListener('mousemove', handleMouseMove)

		// Анимация
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			// Обновление и рисование частиц
			particlesArray.forEach((particle, i) => {
				// Движение
				particle.x += particle.vx
				particle.y += particle.vy

				// Отскок от границ
				if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
				if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

				// Взаимодействие с мышью
				const dx = mouse.x - particle.x
				const dy = mouse.y - particle.y
				const distance = Math.sqrt(dx * dx + dy * dy)

				if (distance < mouseRadius) {
					const force = (mouseRadius - distance) / mouseRadius
					particle.x -= (dx / distance) * force * 2
					particle.y -= (dy / distance) * force * 2
				}

				// Рисуем частицу
				ctx.beginPath()
				ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
				ctx.fillStyle = particleColor
				ctx.globalAlpha = opacity
				ctx.fill()

				// Линии между близкими частицами
				for (let j = i + 1; j < particlesArray.length; j++) {
					const particle2 = particlesArray[j]
					if (!particle2) continue

					const dx2 = particle2.x - particle.x
					const dy2 = particle2.y - particle.y
					const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

					if (distance2 < connectionDistance) {
						const lineOpacity = (1 - distance2 / connectionDistance) * opacity
						ctx.beginPath()
						ctx.strokeStyle = lineColor.replace(/[\d.]+\)$/, `${lineOpacity})`)
						ctx.lineWidth = 1
						ctx.moveTo(particle.x, particle.y)
						ctx.lineTo(particle2.x, particle2.y)
						ctx.stroke()
					}
				}
			})

			ctx.globalAlpha = 1
			requestAnimationFrame(animate)
		}

		animate()

		// Cleanup
		const cleanup = () => {
			window.removeEventListener('resize', resizeCanvas)
			window.removeEventListener('mousemove', handleMouseMove)
		}

		return cleanup
	}

	return {
		initParticles,
	}
}
