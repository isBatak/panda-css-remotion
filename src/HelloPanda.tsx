import {Sequence} from 'remotion'
import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Logo} from './HelloPanda/Logo';
import {Subtitle} from './HelloPanda/Subtitle';
import {Title} from './HelloPanda/Title';
import {z} from 'zod';
import { css } from '../styled-system/css';

export const myCompSchema = z.object({
	titleText: z.string(),
});

export const HelloPanda : React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Animate from 0 to 1 after 25 frames
	const logoTranslationProgress = spring({
		frame: frame - 25,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[0, -150]
	);

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill className={css({ bg: 'primary ' })}>
			<AbsoluteFill style={{opacity}}>
				<AbsoluteFill style={{transform: `translateY(${logoTranslation}px)`}}>
					<Logo />
				</AbsoluteFill>
				{/* Sequences can shift the time for its children! */}
				<Sequence from={35}>
					<Title titleText={propOne} />
				</Sequence>
				{/* The subtitle will only enter on the 75th frame. */}
				<Sequence from={75}>
					<Subtitle />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
