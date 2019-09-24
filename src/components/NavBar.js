import React from 'react'


import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Receiptly</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/SignUp">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/receiptlist">List of Receipts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/addreceipt">Add a Receipt</NavLink>
              </NavItem>
              </Nav>
            </Collapse>
           </Navbar>
         </div>   
    );
  }
} 