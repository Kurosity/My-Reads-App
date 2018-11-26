import React, {Component} from 'react'

class Books extends Component{
   /* bookMove = (book, shelf) => {
        this.setState({
            origShelf: shelf
        })
        this.bookMove(book, shelf)
    }  */  

    /**
     * Image Check
     * Check to see in a image exists. 
     */

    bimage = this.props.book.imageLinks ? 
            (this.props.book.imageLinks.smallThumbnail || this.props.book.imageLinks.thumbnail)
        : '' ;
    

    render(){
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.bimage})`}}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(event) => this.props.moveBook(this.props.book, event.target.value)}
                                value={this.props.currShelf}
                                >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title || 'Title Unknown'}</div>
                <div className="book-authors">{this.props.book.authors || 'Author Uknown'}</div>
            </div>
        )
    }
}

export default Books;