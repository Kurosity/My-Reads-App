import React, {Component} from 'react'
import Books from './Books'
//import * as BooksAPI from '../BooksAPI'

class Shelf extends Component{
   state = {
       shelfName: '',
       selShelf: ''
   }
   
   shelfName = this.props.shelfName
   selShelf = this.props.selfShelf


    render(){
        console.log(this.selShelf)
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.shelfName}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                      this.props.books.filter(
                          book => book.shelf === this.selShelf
                    ).map(
                      book => (                  
                        <li key={book.id}>
                        <Books book={book} 
                            moveBook={this.props.moveBook} 
                            currShelf={book.shelf}/>
                        </li>
                      )
                    )
                  }
                </ol>
                </div>
            </div>
        )
    }
}

export default Shelf;