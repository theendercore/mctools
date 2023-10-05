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
                'text': '#f6f8fe',
                'background': '#060b23',
                'primary': '#8860e6',
                'secondary': '#320a3d',
                'accent': '#bd34df',
            }
        }
    },
    plugins: []
};
