import React from 'react'
import FilteringGrid from '../../../lib/FilteringGrid'
import { initialData } from '../data'

const types = {
    male: 'Male',
    female: 'Female'
}

const columns = [
    {
        name: 'id',
        title: 'ID',
        filter: {
            type: 'textbox'
        }
    },
    {
        name: 'first_name',
        title: 'First name',
        customTemplate: (row) => <b>{row.first_name}</b>,
        filter: {
            type: 'textbox'
        }
    },
    {
        name: 'last_name',
        title: 'Last name',
        customTemplate: (row) => <b>{row.last_name}</b>,
        filter: {
            type: 'textbox'
        }
    },
    {
        name: 'email',
        title: 'E-mail',
    },
    {
        name: 'gender',
        title: 'Gender',
        filter: {
            type: 'selectbox',
            values: types
        },
    },
    {
        name: 'actions',
        title: 'Actions',
        customTemplate: (row) => <span><a href={`/detail/${row.id}`}>Detail</a></span>
    }
]

const getDefaultFilterValues = (columns) => {
    let result = {}

    columns.filter((column) => column.filter).map((column) => {
        result[column.name] = ''
    })

    return result
}

class AppContainer extends React.Component
{
    constructor(props) {
        super(props)

        this.state = {
            data: initialData,
            filter: getDefaultFilterValues(columns)
        }

        this.handleFilterInputChange = this.handleFilterInputChange.bind(this)
        this.handleFilterButtonClick = this.handleFilterButtonClick.bind(this)
    }

    handleFilterInputChange(e) {
        let filter = this.state.filter

        filter[e.target.name] = e.target.value

        this.setState({ filter: filter })
    }

    handleFilterButtonClick(e){
        console.log(this.state.filter);
    }

    render() {
        return <FilteringGrid
                    columns={columns}
                    data={this.state.data}
                    handleFilterInputChange={this.handleFilterInputChange}
                    handleFilterButtonClick={this.handleFilterButtonClick}
                    filter={this.state.filter}
                    bootstrapStyle={true}
                />
    }
}

export default AppContainer