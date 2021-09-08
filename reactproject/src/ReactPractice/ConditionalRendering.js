import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn:true
        }
    }

    render() {
        return this.state.isLoggedIn && <div>Condition is True</div>

        /*return(
            this.state.isLoggedIn?
            <div>Condition is True</div>:
            <div>Condition is False</div>
        )*/

        /*let message
        if (this.state.isLoggedIn) {
            message = <div>Condition is True</div>
        }
        else {
            message = <div>Condition is False</div>
        }
        return <div>{message}</div>*/

        /*if (this.state.isLoggedIn) {
            return <div>Condition is True</div>
        }
        else {
            return <div>Condition is False</div>
        }*/
    }
}


export default ConditionalRendering
