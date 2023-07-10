import { WebpackOverrideFn } from '@remotion/cli/config';
import {enablePostCSS} from '../lib/enablePostCSS';

export const webpackOverride: WebpackOverrideFn = (currentConfiguration) => {
	return enablePostCSS(currentConfiguration);
};
