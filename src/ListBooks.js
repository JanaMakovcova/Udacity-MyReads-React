import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import Book from './Book'
import './App.css'
import { Link } from 'react-router-dom'


class ListBooks extends Component {

//function returns array of books in shelf
  renderShelf = (shelf) => {
    let show = this.props.books.filter((book) => book.shelf === shelf)
    return show  
  }
  
    render(){
      let shelves = [{currentlyReading: 'Currently Reading'}, {wantToRead: 'Want to read'}, {read: 'Read'}]
       
       return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">    
          {shelves.map((shelf) =>
            //iterate through all shelves objects 
            //use value of shelf object for heading and key of shelf for rendering books 
                (<div className="bookshelf">      
                  <h2 className="bookshelf-title">{Object.values(shelf)[0]}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">                  
                      {this.renderShelf(Object.keys(shelf)[0]).map((book) => 
                    <Book key={book.id}
                    bookSelected={book}
                    change={this.props.onChangeShelf}/>
                    )}      
                    </ol>
                  </div>
                </div>)
          )}          
        </div>
        <div className="open-search">
          <Link to='/filter'>Add a book</Link>
        </div>
      </div>
       )
}

}
export default ListBooks


