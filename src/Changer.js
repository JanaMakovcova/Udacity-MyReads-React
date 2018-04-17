import React, {Component} from 'react'
import './App.css'


class Changer extends Component {
    render(){
       return (
        <div className="book-shelf-changer">
            <select>
                <option value="none" disabled> Generovano pres React Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>)
}
}
export default Changer