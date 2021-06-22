import { useTable } from 'react-table';

type Column = { Header: string, accessor: string }
type TableProps = {
    data: Array<any>,
    columns: Array<Column>
}

export default function Table({ data, columns }: TableProps) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <table {...getTableProps()}
            className='text-left'
        >
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}
                    >
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                className='w-1/4 border-b-2 border-gray-200 py-3 px-2 md:px-4 bg-[#C1C6D8] text-black font-bold'
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}
                            className='bg-white hover:bg-[#C1C6D8]'
                        >
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        className='border-b-2 border-gray-200 py-3 px-2 md:px-4'
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}