import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import Changer from './Changer'
import Book from './Book'
import './App.css'

class ListBooks extends Component {
  
    render(){
        let showingBooksCurrent = this.props.books.filter((book) => book.shelf === 'currentlyReading')
        let showingBooksWant = this.props.books.filter((book) => book.shelf === 'wantToRead')
        let showingBooksRead = this.props.books.filter((book) => book.shelf === 'read')
       return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {showingBooksCurrent.map((book) =>  
                  <Book key={book.id}
                  bookSelected={book}
                  change={this.props.onChangeShelf}/> 
                  )}               
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {showingBooksWant.map((book) => (
                 <Book key={book.id}
                 bookSelected={book}
                 change={this.props.onChangeShelf}/> 
                  ))}  
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {showingBooksRead.map((book) => (
                    <li key={book.id}>
                        <div className="book">
                        <div className="book-top">
                        <div className='book-cover' style={{
                            width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`
                        }}/>
                        <Changer />
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>       
                        </div>
                    </li>
                    ))}   
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
       )
}
}
export default ListBooks