import React, {useState,useEffect} from 'react'
import axios from 'axios'
const WorkshopsList  = React.memo(function () {
    const [state, setState] = React.useState({
        workshops: [],
        status: WorkshopsList.FETCHING
    })

    const fetchWorkshops = () => {
        setState({
            ...state,
            status: WorkshopsList.FETCHING
        })
        axios.get(`http://workshops-server.herokuapp.com/workshops`)
            .then(response => response.data)
            .then(workshops => {
                console.log('Fetched workshops:')
                console.log(workshops)
                setState({
                    ...state,
                    workshops, // same as workshops:workshops
                    status: WorkshopsList.FETCHED
                })
            }).catch(error => {
            setState({
                ...state,
                status: WorkshopsList.ERROR_FETCHING,
                error
            })
        })
    }

    useEffect(fetchWorkshops)

    console.log('status=', state.status)
    switch (state.status) {
        case WorkshopsList.FETCHING:
            return (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        case WorkshopsList.FETCHED:
            console.log('Fetched - lets show workshops')
            console.log(state.workshops.length)
            return (
                <div>
                    {state.workshops.length ? (
                        <ul className="list-group">
                            {
                                state.workshops.map(workshop => <li className="list-group-item" key={workshop.id}>
                                    {workshop.name}
                                </li>)
                            }
                        </ul>
                    ) : 'No workshops'}
                </div>
            )
        case WorkshopsList.ERROR_FETCHING:
            return (
                <div class="alert alert-danger" role="alert">
                    <strong>error.message</strong>
                </div>
            )
        default:
            return null
    }

})

WorkshopsList.FETCHING = 'FETCHING'
WorkshopsList.FETCHED = 'FETCHED'
WorkshopsList.ERROR_FETCHING = 'ERROR_FETCHING'

export default WorkshopsList