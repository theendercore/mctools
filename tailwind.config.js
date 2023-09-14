/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'inc-sans': ['Inclusive Sans', 'sans-serif'],
				'till-warp': ['Tilt Warp', 'sans-serif']
			},
			colors: {
				text: '#f2fcf8',
				background: '#061d14',
				primary: '#2cc1ce',
				secondary: '#0c203b',
				accent: '#3d7dd6'
			}
		}
	},
	plugins: []
};
