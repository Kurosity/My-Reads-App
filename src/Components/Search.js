import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import Books from './Books'
import {Link} from 'react-router-dom'

class Search extends Component{
    state = {
        query: '',
        searched: []
    }

    /**
     * Search Query 
     * Return search results based on search query
     */

    bookSearch = (query) => {
        
        (query === null || query === '' || query === undefined) ?
            this.setState({
                searched: []
            })
         :
            BooksAPI.search(query).then((searched) => {
                searched.error ? (
                    this.setState({
                        searched: []
                })) : (
                    this.setState({
                        searched: searched
                    })
                )
            })
        }

    /**
     * Update Query
     * Update search results based on modified query
     */

    updateQuery = (query) => {
        this.setState({
            query: query
        })

        this.bookSearch(query)
    }

    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <button><Link to='/' className="close-search">Close</Link></button>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" 
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.searched.map(bSearch => {
                            let shelf = 'none'

                            this.props.books.map(abook =>(
                            abook.id === bSearch.id ?
                                shelf = abook.shelf : ''
                        ))

                            return( 
                                <li key={bSearch.id}>
                                <Books book={bSearch} moveBook={this.props.moveBook} currShelf={shelf}/>
                                </li>
                            )
                            }                            
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}


export default Search;
