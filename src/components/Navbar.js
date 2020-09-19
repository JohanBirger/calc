import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
            <ul className="navlinks">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
        
            </ul>
          </nav>
        )
    }
}

