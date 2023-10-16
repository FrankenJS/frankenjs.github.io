/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#FF2555',
				'dark': '#1B1C21',
				'light': '#ffffff'
			}
		},
	},
	plugins: [],
}
