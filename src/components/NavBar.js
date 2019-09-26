import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom'

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
         <NavbarBrand className="mr-auto">
           <Link to='/'>
             <img src={ require('../assets/images/receiptlyLogo.svg') } alt=''receiptly logo />
           </Link>
         </NavbarBrand>
         <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
         <Collapse isOpen={!this.state.collapsed} navbar>
           <Nav navbar>
             <NavItem>
               <NavLink to="/login">Login</NavLink>
             </NavItem>
             <NavItem>
               <NavLink to="/SignUp">Sign Up</NavLink>
             </NavItem>
             <NavItem>
               <NavLink to="/receiptlist">My Receipts</NavLink>
             </NavItem>
             </Nav>
           </Collapse>
          </Navbar>
        </div>
    );
  }
} 



//         <Nav>
//             <NavLink href='/'>Home</NavLink>
//             <NavLink href='SignUp'>Register</NavLink>
//             <NavLink href='/login'>Login</NavLink>
//             <NavLink href='#'>Add Receipts</NavLink>
//             <NavLink href='/receiptlist'>My Receipts</NavLink>
//         </Nav>
//     )
// }
// const Nav = styled.div`
//     display: flex;
//     justify-content: space-between;
//     margin: 20px;
//     padding-top: 14px;
//     text-decoration: none;
//     font-size: 2.6rem;
//     font-weight: bold;
//     color: #2C2C2C;
//     border-top: 2px solid #2C2C2C;
// `;
// const Logo = styled.img`
//     margin: 0 auto;
// `;
