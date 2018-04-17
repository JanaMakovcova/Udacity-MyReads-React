import React, { Component } from 'react';
import './App.css'
//import PropTypes from 'prop-types'

class Book extends Component {
    
  handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.value
    if (this.props.change)
      this.props.change(this.props.bookSelected, value)
  }

  render() {
    return (
    <li>
        <div className="book">
            <div className="book-top">
                <div className='book-cover' style={{
                          width: 128, height: 193, backgroundImage: `url(${this.props.bookSelected.imageLinks.thumbnail})`
                      }}/>
        <div className="book-shelf-changer">
            <select onChange={this.handleSubmit}>
                <option value="none" disabled> Generovano pres React Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
            </div>
                <div className="book-title">{this.props.bookSelected.title}</div>
                <div className="book-authors">{this.props.bookSelected.authors}</div>       
                </div>
        </div>
      </li>
    )
  }
}

export default Book