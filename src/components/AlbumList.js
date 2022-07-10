import React, { Component } from 'react'
import axios from 'axios'
import './ListStyle.css'
export class AlbumList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMessage: 'Error retrieving data' })
            })
    }
    deleteRow(id, e) {
        axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(response => {
                console.log(response);
                console.log(response.data);
                this.setState({ posts: this.state.posts.filter(item => item.id !== id) });
            }
            )
    }
    render() {
        const {posts} = this.state
        return (
            <div>
                <h1> List of Albums</h1>
                <table className='table1'>
                    <tr className='table1_tr1'>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Thumbnail</td>
                        <td>Delete</td>
                    </tr>
                    {posts.map(post =>
                        <tr key={(post.id)}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td><img src= {post.thumbnailUrl}></img></td>
                            <td><button onClick={(e) => this.deleteRow(post.id, e)}>Delete</button></td>
                        </tr>
                    )
                    }

                </table>
            </div>
        )
    }
}
export default AlbumList