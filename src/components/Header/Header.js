import * as ReactBootStrap from 'react-bootstrap';

import { UserContext } from '../../App';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const {name,photo} = loggedInUser;
    var link ={
        color:"Black",
        textDecoration:"none",
        fontWeight: "bold"
    }

    return (
        
        
        <div >
            
            <ReactBootStrap.Navbar collapseOnSelect expand="lg"  variant="light" bg="warning">
                <ReactBootStrap.Navbar.Brand><Link style={link} to="/home"><h3>BOOK LAND</h3></Link></ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">


                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                        <ReactBootStrap.Nav.Link ><Link style={link} to="/home">Home</Link> </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link><Link style={link} to="/order">Orders</Link></ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link><Link style={link} to="/deals">Deals</Link></ReactBootStrap.Nav.Link>
                        
                        <ReactBootStrap.NavDropdown style={link} title="ADMIN" id="basic-nav-dropdown">
                         <ReactBootStrap.NavDropdown.Item ><Link style={link} to="/addBook">Add Book</Link></ReactBootStrap.NavDropdown.Item>
                         <ReactBootStrap.NavDropdown.Item style={link} ><Link style={link} to="/manageBook">Manage Book</Link></ReactBootStrap.NavDropdown.Item>
        
                        </ReactBootStrap.NavDropdown>
                      
                       
                        <ReactBootStrap.Nav.Link href="/login"><button className="btn btn-dark">{name?.length > 0 ?'Log Out': 'Log In'}</button></ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#">{name?.length > 0 ?<button className="btn btn-dark"><img style={{width:"30px",borderRadius :"50%"}} src={photo} alt=""/> {name}</button> :null}</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>

        </div>
    );
};

export default Header;