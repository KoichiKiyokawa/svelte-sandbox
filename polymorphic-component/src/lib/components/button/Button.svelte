<script lang="ts" generics="T extends (keyof SvelteHTMLElements) | SvelteComponent">
	import type { ComponentProps, SvelteComponent } from 'svelte';
	import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';

	type $$Props =
		| {
				as: 'a';
				href: string;
		  }
		| ({
				as?: T;
		  } & T extends keyof SvelteHTMLElements
				? SvelteHTMLElements[T]
				: ComponentProps<T>);

	export let as: keyof SvelteHTMLElements | SvelteComponent = 'button';
</script>

{#if as === 'button'}
	<button type="button" {...$$restProps} on:click>
		<slot />
	</button>
{:else if as === 'a'}
	<a {...$$restProps}><slot /></a>
{:else if typeof as === 'string'}
	<svelte:element this={as}><slot /></svelte:element>
{:else}
	<svelte:component this={as}><slot /></svelte:component>
{/if}
