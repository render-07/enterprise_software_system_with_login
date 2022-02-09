export const COLUMNS = [  
    {
        Header: 'Item Name',
        accessor: 'itemName'
    },

    {
        Header: 'Quantity',
        accessor: 'quantity'
    },

    {
        Header: 'Price',
        accessor: 'price'
    },

    {
        Header: 'SupplierID',
        accessor: 'supplierID'
    },
    {
        Header: 'QR',
        accessor: 'qr',
        // Cell: () => {
        //     return (
        //         <QRCode
        //         level="Q"
        //         style={{ width: 256 }}
        //         value={JSON.stringify({
        //           id: 928328,
        //           name: 'Jane Doe',
        //           insider: true,
        //         })}
        //       />
        //     );
        // },
    },
]