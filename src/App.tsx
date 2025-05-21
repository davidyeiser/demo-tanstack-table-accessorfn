import {
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";

const getRandomIndex = () => {
  const min = 0
  const max = 4
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getDynamicKey = () => {
  const keyOptions = ["apple", "banana", "kiwi", "orange", "plum"]
  const i1 = getRandomIndex()
  const i2 = getRandomIndex()
  const i3 = getRandomIndex()
  return `${keyOptions[i1]}.${keyOptions[i2]}.${keyOptions[i3]}`
}

const data = [
  { [getDynamicKey()]: 1 },
  { [getDynamicKey()]: 2 },
  { [getDynamicKey()]: 3 }
]

function App() {
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

  return (
    <div>
      <table>
        <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.id}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {cell.renderValue()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  )
}

export default App
