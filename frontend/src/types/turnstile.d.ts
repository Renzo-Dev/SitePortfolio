// Типы для Cloudflare Turnstile
interface TurnstileOptions {
	sitekey: string
	theme?: 'light' | 'dark' | 'auto'
	callback?: (token: string) => void
	'error-callback'?: () => void
	'expired-callback'?: () => void
	size?: 'normal' | 'compact'
}

interface Turnstile {
	render: (element: HTMLElement, options: TurnstileOptions) => string
	reset: (widgetId: string) => void
	remove: (widgetId: string) => void
	getResponse: (widgetId: string) => string | null
}

interface Window {
	turnstile?: Turnstile
}
