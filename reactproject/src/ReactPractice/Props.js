// import React from 'react'

// const Props = (props) => {
//     return (
//         <div>
//             <h1>Hello {props.name} This is Functional Component</h1>
//         </div>
//     )
// }
// export default Props

import React, { Component } from 'react'

export class Props extends Component {
    render() {
        return (
            <div>
            <h1>Hello {this.props.name} This is Class Component</h1>
            </div>
        )
    }
}

export default Props

