import React from 'react';
import { Link } from "react-router-dom";

function Contact(){
    return (
        <main className="container p-4">
        <h3 className="pagetitle"><strong>Contact</strong></h3>
        <hr />
        
        <div className="justify-content-center h3">arlenesanchez004@gmail.com</div>
        <div className="justify-content-center h3"><Link href="https://arlenesanchez004.github.io/" target="_blank">arlenesanchez004.github.io</Link></div>
        <div className="justify-content-center h3"><Link href="https://www.linkedin.com/in/arlenesanchez004/" target="_blank">www.linkedin.com/in/arlenesanchez004</Link></div>
    </main>
    )
}

export default Contact;