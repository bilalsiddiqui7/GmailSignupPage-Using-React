
import React, { Component } from 'react'

export class State extends Component {
    constructor() {
        super()
        this.state={
            message:'Click here to Subscribe'
        }
    } 
    // GETTING ERROR - TypeError: this.setstate is not a function
    changemessage(){
        this.setstate({
            message:'Thanks for subscribing'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changemessage()}>Subscribe</button>
            </div>
        )
    }
}

export default State
