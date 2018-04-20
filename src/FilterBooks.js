import React, {Component} from 'react'
//import Changer from './Changer'
import './App.css'
import Book from './Book'
//import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class FilterBooks extends Component {
  state = {
    query: '',
    booksSearched: [],  
}


changeShelfSearch = (book, shelf) => {
    let newBooks = this.state.booksSearched
    const index = this.state.booksSearched.findIndex((b) => b.id === book.id);
    newBooks[index].shelf = shelf
    this.setState({booksSearched: newBooks})

    let myLibary = this.props.books
    const indexLib = myLibary.findIndex((b) => b.id === book.id)
    if (indexLib !== -1) {
        myLibary[indexLib].shelf = shelf
        myLibary.onchangeShelf(book, shelf)
    } else {
        
        myLibary.onchangeShelf(book, shelf)

    }
    
  }


updateQuery = (query) => {
    this.setState({ query:  query })
    BooksAPI.search(query.trim(), 20).then((booksResponse) => {
        if (!booksResponse)
        this.setState({booksSearched: []})
        else {
            //booksResponse.sort(sortBy('title'))
            let booksResponseWithSelect = booksResponse
            let myLibary = this.props.books
            for (let book of booksResponseWithSelect) {
                for (let b of myLibary) {
                    if (b.id === book.id) {
                        book.shelf = b.shelf
                    } else {
                        book.shelf = "none"
                    }
                   
                  }
              }

            this.setState({booksSearched: booksResponseWithSelect})
        }
      })
    }
clearQuery = (query) => {
    this.setState({query: ''})
}

    render(){
          
       return (
    <div>


  <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>

              <div className="search-books-input-wrapper">
               <input 
                type="text" 
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">      
            {(this.state.booksSearched) && (this.state.booksSearched.map((book) => (
                  <Book key={book.id}
                  bookSelected={book}
                  change={this.changeShelfSearch}/> 
                )))}          
            
            </ol>
            </div>
          </div>

      
      </div>
       )
}
}
export default FilterBooks