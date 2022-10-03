<script lang="ts">
	export let name: string;
	export let initialCount: number = 0;

	let count = initialCount;

	function increment() {
		count += 1;
	}

	function decrement() {
		if (count >= 1) count -= 1;
	}
</script>

<div>
	<h3>{name}</h3>
	<button on:click={decrement}>-1</button>
	<span data-testid="counter-state">{count}</span>
	<button on:click={increment}>+1</button>
</div>
