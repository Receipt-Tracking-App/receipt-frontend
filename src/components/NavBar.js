import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'reactstrap';

const Nav = styled.div`
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


export default function NavBar() {
    return (
        <div>
            <Logo src={ require('../assets/images/receiptlyLogo.svg') } alt='logo' />
            <Nav>
                <NavLink href='/'>Home</NavLink>
                <NavLink href='SignUp'>Register</NavLink>
                <NavLink href='/login'>Login</NavLink>
                <NavLink href='/addReceipt'>Add Receipts</NavLink>
                <NavLink href='/receiptlist'>My Receipts</NavLink>
            </Nav>
        </div>
        
    )
}