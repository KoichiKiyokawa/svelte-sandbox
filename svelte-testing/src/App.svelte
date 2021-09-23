<script lang="ts">
  import Cart from "@/components/Cart.svelte"
  import { CartRepository, TCart } from "@/models/cart"
  import { onMount } from "svelte"

  let loading = true
  let items: TCart[] = []

  $: totalPrice = items.reduce(
    (total, item) => total + item.price * item.amount,
    0
  )

  onMount(async () => {
    loading = true
    try {
      items = await new CartRepository().all()
    } catch (err) {
      console.error(err)
    } finally {
      loading = false
    }
  })
</script>

{#if loading}
  <span>Loading...</span>
{:else}
  {#each items as item}
    <Cart {...item} bind:amount={item.amount} />
  {/each}
  <p>{totalPrice}</p>
{/if}
