import React, { Component } from 'react';
import "../App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <Navbar fixed="bottom">
                    <Nav className="footer-nav justify-content-center">
                        <p>Copyright &copy;</p>
                    </Nav>
                </Navbar>
            </footer>
        )
    }
}

export default Footer;