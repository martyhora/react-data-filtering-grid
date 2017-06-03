import React from 'react'

const existsFilterColumn = (columns) => columns.filter((column) => column.filter).length > 0

const getSelectBoxValues = (values) => {
    let selectBoxValues = []

    for (let value in values) {
        selectBoxValues.push({id: value, name: values[value]})
    }

    return selectBoxValues
}

const getFilterInput = (column, handleFilterInputChange, value, bootstrapStyle) => {
    if (!column.filter || !column.filter.type)
    {
        return null
    }

    let filterInput = null

    switch (column.filter.type) {
        case 'textbox':
            filterInput = <input type="text" name={column.name} onChange={handleFilterInputChange} value={value} className={bootstrapStyle ? 'form-control' : ''} />
            break;
        
        case 'selectbox':
            filterInput = <select name={column.name} onChange={handleFilterInputChange} value={value} className={bootstrapStyle ? 'form-control' : ''}>
                              <option value=""></option>

                              {getSelectBoxValues(column.filter.values).map((option, i) => <option value={option.id} key={i}>
                                  {option.name}
                              </option>)}
                          </select>
            break;
        
        default:
            break;
    }

    return filterInput
}

const FilteringGridFilter = props => {
    let content = null

    if (existsFilterColumn(props.columns)) {
        content = 
            <thead>
                <tr>
                    {props.columns.map((column, i) => <th key={i}>{getFilterInput(column, props.handleFilterInputChange, props.filter[column.name], props.bootstrapStyle)}</th>)}
                </tr>
                <tr>
                    <td colSpan={props.columns.length} style={{textAlign: 'center'}}>
                        <button onClick={props.handleFilterButtonClick} className={props.bootstrapStyle ? 'btn btn-info' : ''}>Filter</button>
                    </td>
                </tr>
            </thead>
    }

    return content
}

export default FilteringGridFilter