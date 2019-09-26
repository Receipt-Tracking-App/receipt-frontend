<<<<<<< HEAD
import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink} from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarToggler, NavbarBrand,  NavItem } from 'reactstrap';
import styled from 'styled-components';
=======
import React from 'react'
import { connect } from 'react-redux'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom'
>>>>>>> 90564bcbaea036c7907dc718ba2dea7b65544812

class NavBar extends React.Component {
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
    const {
      userId
    } = this.props;
<<<<<<< HEAD
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
            <StyledNav navbar>
            {!userId && <StyledNavItem>
                <StyledNavLink to="/login">Login</StyledNavLink>
              </StyledNavItem>}

              {!userId && <StyledNavItem>
                <StyledNavLink to="/SignUp">Sign Up</StyledNavLink>
               </StyledNavItem>}

               {userId && <StyledNavItem>
                <StyledNavLink to="/receiptlist">My Receipts</StyledNavLink>
               </StyledNavItem>}

              </StyledNav>
            </Collapse>
        </Navbar>
      </div>   
=======

    return (
      <div>
       <Navbar color="faded" light expand="md">
         <NavbarBrand className="mr-auto">
           <Link to='/'>
             <img src={ require('../assets/images/receiptlyLogo.svg') } alt='receiptly logo' height="70px"/>
           </Link>
         </NavbarBrand>
         <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
         <Collapse isOpen={!this.state.collapsed} navbar>
           <Nav navbar>
             {!userId && <NavItem>
               <NavLink to="/login" className="nav-link">Login</NavLink>
             </NavItem>}
             {!userId && <NavItem>
               <NavLink to="/SignUp" className="nav-link">Sign Up</NavLink>
             </NavItem>}
             {userId && <NavItem>
               <NavLink to="/receiptlist" className="nav-link">My Receipts</NavLink>
             </NavItem>}
             </Nav>
           </Collapse>
          </Navbar>
        </div>
>>>>>>> 90564bcbaea036c7907dc718ba2dea7b65544812
    );
  }
}


const mapStateToProps = state => {
  return {
    userId: state.userId,
  }
}
export default connect(mapStateToProps, {})(NavBar)


const mapStateToProps = state => {
  return {
    userId: state.userId,
  }
}

export default connect(mapStateToProps, {})(NavBar)


//styled components
const StyledNav = styled(Nav)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background: #5F336C;
  padding: 10px;
`;
const StyledNavItem = styled(NavItem)`
  width: 14vw;
`;
const StyledNavLink = styled(NavLink)`
  font-size: 1.6rem;
  text-decoration: none;
  color: #FAFAFA;
  font-weight: bold;
`;

