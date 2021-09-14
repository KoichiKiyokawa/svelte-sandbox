<script lang="ts">
  import { DataTable } from "carbon-components-svelte"

  type User = {
    id: string
    name: string
    age: number
    gender: "male" | "female"
  }

  const headers: { key: keyof User; value: string | number }[] = [
    { key: "name", value: "Name" },
    { key: "age", value: "age" },
    { key: "gender", value: "Gender" },
  ]

  const rows: User[] = Array.from(Array(10), (_, i) => ({
    id: `id${i}`,
    name: `user${i}`,
    age: i,
    gender: ["male", "female"][i % 2] as User["gender"],
  }))
</script>

<DataTable {headers} {rows}>
  <svelte:fragment slot="cell" let:cell let:row>
    {#if cell.key === "name"}
      {row.age}(years old)
    {/if}
  </svelte:fragment>
</DataTable>
