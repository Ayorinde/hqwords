import React, {useState} from 'react';
import { NavLink as NLink } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks';

import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
    NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu,
    DropdownItem
} from 'reactstrap';

import { BOOKS, LANDING, SIGN_IN, DASHBOARD } from '../constants/routes'
import { IS_LOGGED_IN} from '../apollo/queries/local';


import logo from '../hqwordsLogo.png'
import '../styles/nav.css';

function IsLoggedIn() {
    const { data } = useQuery(IS_LOGGED_IN);
    console.log('data.isLoggedIn: ', data.isLoggedIn);
    return data.isLoggedIn ? <NavLink tag={NLink} to={DASHBOARD}> My Account</NavLink> : 
    <NavLink tag={NLink} to={SIGN_IN}>Login / Register</NavLink>;
}

export default function MyNavbar(props) {
    const [isOpen, toggle] = useState(false);
    
    const doToggle = () => {
        toggle(!isOpen)
    }
    
        return (
            <div className="y-navbar">
                <Navbar light expand="md">
                    <NavbarBrand tag={NLink} to={LANDING}>
                        <img src={logo} alt='hqwords logo' className='app-logo' />
                    </NavbarBrand>
                    <NavbarToggler onClick={doToggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={NLink} to={LANDING}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#/about-us/">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={NLink} to={BOOKS}>Our Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#/services/">Our Services</NavLink>
                            </NavItem>
                            <NavItem>
                                {IsLoggedIn()}
                            </NavItem>


                            {/* <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    
}