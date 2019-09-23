import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'reactstrap';

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    text-decoration: none;
`;

export default function NavBar() {
    return (
        <Nav>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='SignUp'>Register</NavLink>
            <NavLink href='/login'>Login</NavLink>
            <NavLink href='#'>Add Receipts</NavLink>
            <NavLink href='/receiptlist'>My Receipts</NavLink>
        </Nav>
    )
}