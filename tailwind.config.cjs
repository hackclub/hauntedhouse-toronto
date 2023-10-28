/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'light-haunted-orange': '#f5b799',
				'trillium-yellow': '#fefae0',
				'haunted-orange': '#eb6424'
			},
			fontFamily: {
				'wack': ['Wack Club Sans', 'sans-serif'],
				'josefin': ['Josefin Sans', 'sans-serif'],
				'freight': ['The Fright House', 'sans-serif']
			},
			screens: {
				xs: '475px',
				'2xs': '375px'
			}
		},
	},
	plugins: [],
}
