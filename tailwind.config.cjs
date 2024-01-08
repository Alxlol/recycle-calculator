/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('rust-background.jpg')"
			}
		}
	},

	plugins: []
};

module.exports = config;
