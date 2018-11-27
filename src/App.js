import React from 'react'
import * as BooksAPI from './BooksAPI'
import Search from './Components/Search'
import Main from './Components/Main'
import './App.css'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    
    
    showSearchPage: false
    /*
    <Search books={this.state.books}/>
    */
  }

  /**
   * Retrieve all books from the BooksAPI
   */

  getbooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      })
    })
  }

  /**
   * Mount the books to the componnets after book retrieval
   */

  componentDidMount(){
    this.getbooks()
  }

  /**
   * Move the books between shelves using BooksAPI.update
   */

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)

    this.getbooks()

  }

  render() {
    return (
      <div className="app">
        
        <Route exact path='/' render={() => (<Main books={this.state.books} moveBook={this.moveBook} showSearchPage={this.state.showSearchPage}/>)}/>
        
        <Route exact path='/search' render={() => (<Search moveBook={this.moveBook} books={this.state.books}/>)}/>
        
      </div>
    )
  }
}

export default BooksApp
