import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom"

export default class landing extends Component {
    render() {
        return (
            <div className="container valign-wrapper">
            <div className="row form-container">
                <div className="col s6">
                <form>
                    <div class="form-title">
                        <h4 className="pink-text accent-3">Login</h4>
                    </div>
                </form>
                <Router>
                  <Link
                    to="/register"
                    style={{
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px"
                    }}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Login
                  </Link>
                  </Router>
                </div>
                <div className="col s6">
                <Router>
                  <Link
                    to="/login"
                    style={{
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px"
                    }}
                    className="btn btn-large btn-flat waves-effect white black-text"
                  >
                    Log In
                  </Link>
                  </Router>
                </div>
            </div>
          </div>
        )
    }
}
