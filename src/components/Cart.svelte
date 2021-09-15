<script lang="ts">
	export let amount: number;
	export let productName: string;
	export let price: number;
</script>

<div>
	<p>{productName}</p>
	<p>&yen{price}</p>
	<button>+</button>
	<button disabled={amount <= 1}>-</button>
</div>
