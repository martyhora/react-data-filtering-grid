import React from 'react'

const FilteringGridHeader = props =>
    <thead>
        <tr>
            {props.columns.map((column, i) => <th key={i}>{column.title}</th>)}
        </tr>
    </thead>

export default FilteringGridHeader