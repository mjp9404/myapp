import React, { Component } from 'react'
import axios from 'axios'
export class SimpleSignUp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           userId:'',
           title:'',
           error:''
        }
      }
      
      submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMessage: 'Error retrieving data'})
        })
        
      }
    
      changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }
    
        render() {
            const{userId, title} = this.state
        return (
          <div>
            <form onSubmit={this.submitHandler}>
                <div>
                    <input type='text' name='userId' value={userId} onChange={this.changeHandler}></input>
                </div>
                <div>
                <input type='text' name='title' value={title} onChange={this.changeHandler}></input>
                </div>
                <button type='submit'>Submit</button>
            </form>
          </div>
        )
      }
    }
export default SimpleSignUp