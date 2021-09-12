<script lang="ts">
  import DataTable from "./components/DataTable.svelte"

  type HeaderKeys = "name" | "age"
  const headers: { key: HeaderKeys; value: string }[] = [
    { key: "name", value: "氏名" },
    { key: "age", value: "年齢" },
  ]
</script>

<DataTable {headers} rows={[{ name: "user1", age: 1 }]} />
