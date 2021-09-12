<script lang="ts">
  import DataTable from "./components/DataTable.svelte"

  type User = {
    name: string
    age: number
    gender: "male" | "female"
  }

  const headers: { key: keyof User; value: string }[] = [
    { key: "name", value: "氏名" },
    { key: "age", value: "年齢" },
    { key: "gender", value: "性別" },
  ]

  const rows: User[] = [{ name: "user1", age: 1, gender: "male" }]
</script>

<DataTable {headers} {rows}>
  <svelte:fragment slot="header-cell" let:header>
    {header.value}{header.key === "age" ? "(歳)" : ""}
  </svelte:fragment>

  <svelte:fragment slot="cell" let:cell let:row>
    {#if cell.key === "age"}
      <div style="color: red;">
        {cell.value}
      </div>
    {:else if cell.key === "gender"}
      {{ male: "男性", female: "女性" }[row.gender]}
    {:else}
      {cell.value}
    {/if}
  </svelte:fragment>
</DataTable>
