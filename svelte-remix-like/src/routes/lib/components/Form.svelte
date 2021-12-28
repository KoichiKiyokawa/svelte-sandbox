<script lang="ts">
	export let action: string = '';
	export let method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' = 'GET';

	/** @bind */
	export let submitting = false;

	let errorMessages: string[] = [];

	function onSubmit(this: HTMLFormElement) {
		submitting = true;
		const formData = new FormData(this);
		const action = !this.action
			? window.location.href
			: this.action.endsWith('.json')
			? this.action
			: `${this.action}.json`;

		const body: any = {};
		formData.forEach((value, key) => {
			body[key] = value;
		});

		fetch(action, {
			method: this.method,
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.catch((err) => {
				console.error(err);
				errorMessages = err.messages;
			})
			.finally(() => {
				submitting = false;
			});
	}
</script>

{#each errorMessages as err}
	<p>{err}</p>
{/each}

<form on:submit|preventDefault={onSubmit} {action} {method} {...$$restProps}><slot /></form>
