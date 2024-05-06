import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

function Header({title, count}) {
    const headerStyle = {
        color: count > 5 ? 'red' : 'white'
    };

    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand className="mx-auto" style={headerStyle}>{title}</Navbar.Brand>
        </Navbar>  
    );
}

export default Header;


