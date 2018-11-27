import React, {Component} from 'react'
import Books from './Books'
import Shelf from './Shelf'
import ReactDom from 'react-dom'
import {Link} from 'react-router-dom'


class Main extends Component{

    render(){
        return(            
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <Shelf books={this.props.books} moveBook={this.props.moveBook} shelfName={'Currently Reading'} selfShelf={'currentlyReading'}/>
                    <Shelf books={this.props.books} moveBook={this.props.moveBook} shelfName={'Want to Read'} selfShelf={'wantToRead'}/>
                    <Shelf books={this.props.books} moveBook={this.props.moveBook} shelfName={'Read'} selfShelf={'read'}/>
                </div>
                </div>
                <div className="open-search">
                    <Link to='/search'><button>Add a book</button></Link>
                </div>
            </div>
        )
    }
}

export default Main;
