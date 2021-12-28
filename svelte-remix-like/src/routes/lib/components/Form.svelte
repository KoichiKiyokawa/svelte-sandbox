<script lang="ts">
	import { goto } from '$app/navigation';

	export let action: string = '';
	export let method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' = 'GET';

	/** @bind */
	export let submitting = false;

	let errorMessages: string[] = [];

	export const onSubmit = (
		e: Event & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) => {
		submitting = true;
		const formData = new FormData(e.currentTarget);

		const action = !e.currentTarget.action
			? window.location.href
			: e.currentTarget.action.endsWith('.json')
			? e.currentTarget.action
			: `${e.currentTarget.action}.json`;

		const body: any = {};
		formData.forEach((value, key) => {
			body[key] = value;
		});

		fetch(action, {
			method: e.currentTarget.method,
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				const location = res.headers.get('location');
				if (location) goto(location);
			})
			.catch((err) => {
				console.error(err);
				errorMessages = err.messages;
			})
			.finally(() => {
				submitting = false;
			});
	};
</script>

{#each errorMessages as err}
	<p>{err}</p>
{/each}

<form on:submit|preventDefault={onSubmit} {action} {method} {...$$restProps}><slot /></form>
