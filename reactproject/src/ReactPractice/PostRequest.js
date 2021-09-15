import React, { Component } from 'react'
import axios from 'axios'
class PostRequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userID : "",
             title : "",
             body : ""
        }
    }
    changeHangler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }
    render() {
        const {userID,title,body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" onChange={this.changeHangler} />
                    </div>
                    <div>
                        <input type="text" name="title" onChange={this.changeHangler} />
                    </div>
                    <div>
                        <input type="text" name="body" onChange={this.changeHangler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostRequest
