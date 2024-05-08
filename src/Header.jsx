import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';



function Header({title, count}) {
    //Determine header color based on count
    const headerColor = count <= 5 ? 'white' : 'green';
    //Define header style
    const headerStyle = {
        color: headerColor
    };
    //Render header component
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand className="mx-auto" style={headerStyle}>{title}</Navbar.Brand>
        </Navbar>  
    );
}

export default Header;





