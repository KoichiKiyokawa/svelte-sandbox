<script lang="ts">
  type Row = $$Generic

  export let headers: readonly { key: keyof Row; value: string | number }[]
  export let rows: Row[]
</script>

<table>
  <thead>
    <tr>
      {#each headers as header}
        <th>
          <slot name="header-cell" {header}>
            {header.key}
          </slot>
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr>
        {#each headers as header}
          <td>
            <slot
              name="cell"
              {row}
              cell={{ key: header.key, value: row[header.key] }}
            >
              {row[header.key]}
            </slot>
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table,
  th,
  td {
    border-collapse: collapse;
    border-style: solid;
  }
</style>
