import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import FilterBooks from './FilterBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  
  changeShelf = (book, shelf) => {
    let newBooks = this.state.books
    const index = this.state.books.findIndex((b) => b.id === book.id)
    newBooks[index].shelf = shelf
    BooksAPI.update(book, shelf).then(this.setState({books: newBooks}))
  }

  render() {
    return (
      <div className="app">
        
          <div>
           <Route exact path="/" render={() => (
            <ListBooks 
            books={this.state.books}
            onChangeShelf={this.changeShelf} 

          />
          )}/>
          <Route exact path="/filter" render={() => (
            <FilterBooks 
            books={this.state.books}
          />
          )}/>
          </div>
          
        
      </div>
    )
  }
}

export default BooksApp
