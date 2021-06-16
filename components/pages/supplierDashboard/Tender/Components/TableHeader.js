import React from 'react';

const TableHeader = ({header}) => {
    return(
        <thread>
            <tr>
                {header.map( head => (
                    <th key={head.field}>{head.name}</th>
                ))}
            </tr>
        </thread>
    )
}

export default TableHeader