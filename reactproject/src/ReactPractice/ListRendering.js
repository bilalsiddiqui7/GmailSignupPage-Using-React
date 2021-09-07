import { keys } from '@material-ui/core/styles/createBreakpoints'
import React from 'react'

function ListRendering() {
    const persons=['Bilal','Rosy','Sharavan Sir']
    return (
        <div>
        {
            persons.map(person => <h2>{person}</h2>)
        
        }
        </div>
    )
}

export default ListRendering
