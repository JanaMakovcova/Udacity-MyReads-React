import React, {Component} from 'react'
import Changer from './Changer'
import './App.css'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

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
        <div className='search-books-input-wrapper'>
        <div className='search-books-bar'>
           <input
            className='close-search'
            type='text'
            placeholder='Search books'
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value) }
        />
        </div>
           </div>
         
        <div className="list-books">
        
        
        <div className="list-books-content">
          <div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Filtered Books</h2>
              <div className="bookshelf-books">
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
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
      </div>
       )
}
}
export default FilterBooks