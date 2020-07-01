import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    // componentDidMount(){}

    render() {
        return (
            <header>

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-sm-12 p-0 mb-5 navbar-nav">
                            <nav className="navbar navbar-light bg-light">
                                <div className="col-md-1">
                                </div>
                                <div className="col-md-4 col-sm-12 p-0 text-center">
                                    <span className="navbar-brand p-2 h1 w-100" id="myname"><strong>Arlene Sanchez</strong></span>
                                </div>
                                <div className="col-md-1">
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="d-flex justify-content-center w-100">
                                        <Link className="nav-item nav-link border-right px-3 mr-sm-1 text-center" to="/about">About</Link>
                                        <Link className="nav-item nav-link border-right px-3 mr-sm-1 text-center" to="/portfolio">Portfolio</Link>
                                        <Link className="nav-item nav-link px-3 text-center" to="/contact">Contact</Link>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;