/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
				sm: '2rem',
				lg: '5rem',
				xl: '7rem',
				'2xl': '9rem',
			},
		},
	},
	plugins: [],
}
