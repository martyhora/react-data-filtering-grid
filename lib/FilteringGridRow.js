import React from 'react'

const getCells = (columns, row) => {
    let cells = []

    columns.map((column, i) => {
        let cellContent

        if (row[column.name] && !column.customTemplate) {
            cellContent = row[column.name]
        } else if (column.customTemplate) {
            cellContent = column.customTemplate(row)
        }

        cells.push(<td key={i}>{cellContent}</td>)
    })

    return cells;
}

const FilteringGridRow = props =>
    <tr>
        {getCells(props.columns, props.row)}
    </tr>

export default FilteringGridRow