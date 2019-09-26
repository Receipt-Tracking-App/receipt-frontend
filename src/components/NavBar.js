import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand,  NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components';

const NavDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    padding-top: 14px;
    text-decoration: none;
    font-size: 2.6rem;
    font-weight: bold;
    color: #2C2C2C;
    border-top: 2px solid #2C2C2C;
`;
const Logo = styled.img`
    margin: 0 auto;
`;


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
            <NavDiv navbar>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/SignUp">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/receiptlist">List of Receipts</NavLink>
              </NavItem>
              </NavDiv>
            </Collapse>
           </Navbar>
         </div>   
    );
  }
} 
