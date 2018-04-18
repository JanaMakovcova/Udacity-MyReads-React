import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import FilterBooks from './FilterBooks'

class BooksApp extends React.Component {
  state = {
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
    )
  }
}

export default BooksApp
