import React from 'react'
import { connect } from 'react-redux'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom'

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
    );
  }
}


const mapStateToProps = state => {
  return {
    userId: state.userId,
  }
}
export default connect(mapStateToProps, {})(NavBar)