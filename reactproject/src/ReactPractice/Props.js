import React from 'react'

export const Props = (props) => {
    return (
        <div>
            <h1>Good morning {props.name}, Techonology: {props.tech}</h1>
            {props.children}
        </div>
    )
}
export default Props
