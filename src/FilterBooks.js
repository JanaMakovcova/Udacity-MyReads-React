import React, {Component} from 'react'
import Changer from './Changer'
import './App.css'
//import Book from './Book'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'


class FilterBooks extends Component {
  state = {
    query: ''
}

updateQuery = (query) => {
    this.setState({ query: query.trim() })
    }
clearQuery = (query) => {
    this.setState({query: ''})
}

    render(){
      const { books } = this.props
      const { query } = this.state
      let showingBooksFilter
      if (query){
          const match = new RegExp(escapeRegExp(query), 'i')
          showingBooksFilter = books.filter((book) => match.test(book.title) )
      } else {
          showingBooksFilter =  books
      }

        showingBooksFilter.sort(sortBy('title'))
       return (
    <div>


  <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>

              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
            {showingBooksFilter.map((book) => (
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
       )
}
}
export default FilterBooks