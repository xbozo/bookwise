import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'ds-green-100': '#50B2C0',
				'ds-green-200': '#255D6A',
				'ds-green-300': '#0A313C',

				'ds-purple-100': '#8381D9',
				'ds-purple-200': '#2A2879',

				'ds-gray-100': '#F8F9FC',
				'ds-gray-200': '#E6E8F2',
				'ds-gray-300': '#D1D6E4',
				'ds-gray-400': '#8D95AF',
				'ds-gray-500': '#303F73',
				'ds-gray-600': '#252D4A',
				'ds-gray-700': '#181C2A',
				'ds-gray-800': '#0E1116',
			},
		},
	},
	plugins: [],
}
export default config
