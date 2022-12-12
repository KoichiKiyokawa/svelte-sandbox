import { imageWidths } from './image';

type Preset = { w: string; format: string };

const normalJPG: Preset = {
	w: imageWidths.concat(imageWidths.map((i) => i * 2)).join(','), // doubled sizes are for Retina display
	format: 'webp&avif&jpg'
};

const normalPNG = {
	...normalJPG,
	format: 'webp&avif&png'
};

export const presets: Record<string, Preset> = {
	normalJPG,
	normalPNG
};
