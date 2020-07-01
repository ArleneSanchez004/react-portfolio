import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Header extends Component{
    // componentDidMount(){}

    render(){
        return (
            <div className="header">
                <Navbar fixed="top">
                    <Nav className="header-nav">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header;