import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {css} from '../../styled-system/css';

export const Title: React.FC<{
	titleText: string;
}> = ({titleText}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const words = titleText.split(' ');

	return (
		<h1
			className={css({
				fontFamily: 'body',
				fontWeight: 'bold',
				fontSize: 100,
				textAlign: 'center',
				position: 'absolute',
				bottom: 160,
				w: 'full',
			})}
		>
			{words.map((t, i) => {
				const delay = i * 5;

				const scale = spring({
					fps: videoConfig.fps,
					frame: frame - delay,
					config: {
						damping: 200,
					},
				});

				return (
					<span
						key={t}
						className={css({
							color: 'black',
							mx: 3,
							display: 'inline-block',
						})}
						style={{
							transform: `scale(${scale})`,
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
