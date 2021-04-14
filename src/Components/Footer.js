import React from "react";
import {Container} from "react-bootstrap";

const Footer = () => {
    return (
        <Container fluid style = {{backgroundColor: '#212529', color: '#fff' }}>
            <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px',top:'20x'}}>
                       <p>WikiSearch</p>
                </Container>
        </Container>
    )
}

export default Footer;