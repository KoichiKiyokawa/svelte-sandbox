import type { SvelteComponentTyped } from 'svelte';

/**
 * Svelteのコンポーネントから引数を抜き出して、argTypesに必要な型を生成する
 */
export type ArgType<T extends SvelteComponentTyped> = {
	[key in keyof T['$$prop_def']]?: { control: 'number' | 'string' };
};
