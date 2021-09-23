<script lang="ts">
  /** @bind */
  export let amount: number
  export let productName: string
  export let price: number
</script>

<div class="card" data-testid="cart-card">
  <p>{productName}</p>
  <p>&yen{price}</p>
  <button on:click={() => amount++}>+</button>
  <span>{amount}個</span>
  <button disabled={amount <= 1} on:click={() => amount >= 1 && amount--}>
    -
  </button>

  <span>合計{price * amount}円</span>
</div>

<style>
  .card {
    border: 1px solid gray;
    padding: 4px;
  }
</style>
