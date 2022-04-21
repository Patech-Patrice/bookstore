import React from 'react';
import { Link } from 'react-router-dom';


class BookInput extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        title: '',
        body: '',
        genre: '',
        image_url:'',
        author: {
            first_name: '',
            last_name:'',
        }
      }
    }
  
    handleInput = (event) => {
      const name = event.target.name
      const newState = {}
      newState[name] = event.target.value
      this.setState(newState)
      event.preventDefault()
    }
  
    render () {
      return (
        <div>
          <h4>Create a New Novel:</h4>
          <form>
            <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInput} />
            <input type="text" name="body" placeholder="Description" value={this.state.body} onChange={this.handleInput} />
            <input type="text" name="genre" placeholder="Genre" value={this.state.genre} onChange={this.handleInput} />
            <input type="text" name="image_url" placeholder="Image URL" value={this.state.image_url} onChange={this.handleInput} />
            <input type="text" name="author.first_name" placeholder="Author First Name" value={this.state.author.first_name} onChange={this.handleInput} />
            <input type="text" name="author.last_name" placeholder="Author Last Name" value={this.state.author.last_name} onChange={this.handleInput} />
            <button type="submit">Create Novel</button>
          </form>
        </div>
      )
    }
  }
  
  export default BookInput;