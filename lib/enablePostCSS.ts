import { WebpackOverrideFn } from '@remotion/cli/config';

/**
 * @description A function that modifies the default Webpack configuration to make the necessary changes to support Panda CSS.
 */
export const enablePostCSS: WebpackOverrideFn = (currentConfiguration) => {
	return {
		...currentConfiguration,
		module: {
			...currentConfiguration.module,
			rules: [
				...(currentConfiguration.module?.rules
					? currentConfiguration.module.rules
					: []
				).filter(
					(rule) => rule !== '...' && !rule.test?.toString().includes('.css')
				),
				{
					test: /\.css$/i,
					use: [
						require.resolve('style-loader'),
						require.resolve('css-loader'),
						require.resolve('postcss-loader')
					],
				},
			],
		},
	};
};
