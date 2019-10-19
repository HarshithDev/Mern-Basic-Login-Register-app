import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom"

class navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                <div className="nav-wrapper white">
                    <Router>
                    <Link to="/register" style={{fontFamily:"monospace"}} className="col s5 brand-logo center black-text">
                    <i className="material-icons">code</i>MERN
                    </Link>
                    </Router>
                </div>
                </nav>
            </div>
        )
    }
}

export default navbar;