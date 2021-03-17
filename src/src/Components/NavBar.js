import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import {Link} from "react-router-dom";


const Navibar = () => {
    return(
        <div>
            <Navbar collabseOnSelect expand='lg' bg='dark'> {/*Создание НавиБар*/}
                <Navbar.Brand>WikiSearch</Navbar.Brand> {/*Название в левом углу НавиБар*/}
                <Navbar.Toggle aria-controls = 'responsive-navbar-nav'/> {/*Контроль располодения конопок НавиБар*/}
                <Navbar.Collapse id = 'responsive-navbar-nav'> {/*Создание НавиБар*/}
                    {/*<Nav className ='mr-auto'> /!*Создание НавиБар*!/*/}

                    {/*    <Nav.Link><Link to='/'>Home</Link></Nav.Link> /!*Создание НавиБар*!/*/}
                    {/*    <Nav.Link><Link to='/about'>About</Link></Nav.Link>*/}

                    {/*</Nav>*/}

                    <Nav> {/*Создание НавиБар*/}

                        {/*<Button variant='primary' className='mr-2'>Log In</Button>*/}
                        {/*<Button variant='primary'>Log Out</Button>*/}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navibar;