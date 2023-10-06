/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'light-trillium-green': '#edfff7',
				'trillium-yellow': '#ffffb4',
				'trillium-green': '#2e9568'
			},
			fontFamily: {
				'wack': ['Wack Club Sans', 'sans-serif'],
				'josefin': ['Josefin Sans', 'sans-serif']
			},
			screens: {
				xs: '475px',
				'2xs': '375px'
			}
		},
	},
	plugins: [],
}
