# TanStack Table `accessorFn` demo

Example of retrieving values from known data structures with unknown object
keys. (In the context of not being to rely on `accessorKey` as a reliable method
for accessing the value because of the potential presence of `.`.)

From [Docs on accessorKeys](https://tanstack.com/table/latest/docs/guide/data#deep-keyed-data):

> NOTE: The "keys" in your json data can usually be anything, but any periods in
> the keys will be interpreted as a deep key and will cause errors.

[View related discussion](https://github.com/TanStack/table/discussions/5977)

## Demo

1. Clone this repository.
2. Run `yarn` and then `yarn dev`.
3. Relevant code is in `src/App.tsx`.

```ts
const data = [
  { [getDynamicKey()]: 1 },
  { [getDynamicKey()]: 2 },
  { [getDynamicKey()]: 3 }
]
```

```ts
const table = useReactTable({
  data: data,
  columns: [
    {
      accessorKey: "test",
      id: "data",
      accessorFn: (originalRow) => {
        return Object.values(originalRow)
      }
    }
  ],
  getCoreRowModel: getCoreRowModel()
});
```
