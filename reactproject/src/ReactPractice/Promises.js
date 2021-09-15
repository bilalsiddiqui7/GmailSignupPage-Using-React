import axios from 'axios';
import React, { Component } from 'react'

class Promises extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title : ""
        }
        this.getData = this.getData.bind(this); // binding in ReactJS
    }
    // getData() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
    //         console.log("It is working fine")
    //         this.setState({
    //             title: res.data.title
    //         })
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }
    async getData() {
        const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(res)
        this.setState({
        title: res.data.title
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.getData}>Click</button>
                <h1>{this.state.title}</h1> 
            </div>
        )
    }
}

export default Promises
