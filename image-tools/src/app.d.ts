// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare module '*&picture' {
	const pictures: {
		sources: { [format: string]: { src: string; w: number }[] };
		fallback: { src: string };
	};
	export default pictures;
}
