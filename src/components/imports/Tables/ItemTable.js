import { useMemo, useEffect } from 'react'
import { useTable } from 'react-table';
import { COLUMNS } from './columns'

export const ItemTable = ({items}) => {

    // // Call dispatch
    // const dispatch = useDispatch();

    // // useEffect is equivalent to componentDidMount()
    // useEffect(() => {
    //     dispatch(getItems());
    // }, []);

    // // Get reducer from index.js
    // const item = useSelector((state) => state.item);

    // // Deconstruct
    // // 'items' is the name of array in the state
    // // so the name must be followed in deconstructuring.
    // const { items } = item;

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => items, []);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow }
    = useTable({ columns, data })

    return (
        <div className="box">
        <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>

    )
}

export default ItemTable
