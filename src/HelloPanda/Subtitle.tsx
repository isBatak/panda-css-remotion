import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {css} from '../../styled-system/css';

export const Subtitle: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div
			className={css({
				fontFamily: 'body',
				fontSize: '4xl',
				textAlign: 'center',
				position: 'absolute',
				bottom: '130px',
				width: 'full',
			})}
			style={{opacity}}
		>
			CSS-in-JS with build time generated styles.
		</div>
	);
};
