import React from 'react'
import FilteringGridRow from './FilteringGridRow'
import FilteringGridHeader from './FilteringGridHeader'
import FilteringGridFilter from './FilteringGridFilter'

const FilteringGrid = props =>
    <table className={props.bootstrapStyle ? 'table' : ''}>
        <FilteringGridHeader columns={props.columns} />
        <FilteringGridFilter columns={props.columns} bootstrapStyle={props.bootstrapStyle} handleFilterInputChange={props.handleFilterInputChange} handleFilterButtonClick={props.handleFilterButtonClick} filter={props.filter} />
        <tbody>
            {props.data.map((row, i) => <FilteringGridRow key={i} row={row} columns={props.columns} />)}
        </tbody>
    </table>

export default FilteringGrid