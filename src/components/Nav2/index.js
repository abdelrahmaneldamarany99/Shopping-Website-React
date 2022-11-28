import React  from 'react';
import './style.css'
import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import AdditionalContentExample from '../Alert/index'

const Nav2 = () => { 

    return(
    <div>
      <Navbar collapseOnSelect expand="lg" bg="secondary" className="text-light myNav" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav">>></Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Product A</Nav.Link>
      <Nav.Link href="#features">Product B</Nav.Link>
      <NavDropdown title="Product C" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Product 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Product 2</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Product 3</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        <AdditionalContentExample/>
        </div>
    )
}

export default Nav2;