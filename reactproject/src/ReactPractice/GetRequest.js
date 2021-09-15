import React, { Component } from 'react'
import axios from 'axios'
class GetRequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts : [] 
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts') // https://jsonplaceholder.typicode.com/
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(console.error)
        })
    }
    render() {
        return (
            <div>
                Listttt
            </div>
        )
    }
}

export default GetRequest
