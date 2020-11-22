import React from 'react'
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'itemName', headerName: 'Name', width: 240 },
    { field: 'armorSlot', headerName: 'Slot', width: 150 },
    {
        field: 'stats',
        headerName: 'Stats',
        sortable: false,
        width: 300,
        valueGetter: (params) => 
            `${params.getValue('secondaryOneValue')} ${params.getValue('secondaryOne')} / ${params.getValue('secondaryTwoValue')} ${params.getValue('secondaryTwo')}`,
    },
    { field: 'dungeon', headerName: 'Dungeon', width: 200},
    { field: 'boss', headerName: 'Boss', width: 250},
]

export default function Table({ data, primary, secondaryOne, secondaryTwo }) {
    const filteredData = data
        .filter(loot => 
            loot.primaryStat.includes(primary) &&
            (secondaryOne === "Any" || loot.secondaryOne === secondaryOne) &&
            (secondaryTwo === "Any" || loot.secondaryTwo === secondaryTwo) 
        )
    return (
        <DataGrid rows={filteredData} columns={columns} pageSize={50} />
    )
}
