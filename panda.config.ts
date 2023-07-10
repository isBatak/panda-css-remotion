import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,jsx,ts,tsx}'],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				fonts: {
					body: {
						value: 'SF Pro Text, Helvetica, Arial, sans-serif',
						description: 'The font used for body text',
					},
				},
				colors: {
					primary: {
						value: '#fde047',
						description: 'Primary brand color',
					},
				},
			},
		},
	},

	// The output directory for your css system
	outdir: 'styled-system',

	jsxFramework: 'react',

	outExtension: 'js',
});
