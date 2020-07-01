import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Footer extends Component{
    // componentDidMount(){}

    render(){
        return (
            <div className="Footer">
                <Navbar fixed="bottom">
                    <Nav className="footer-nav justify-content-md-center">
                        <p>Copyright &copy;</p>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Footer;