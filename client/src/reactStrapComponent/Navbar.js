import React from 'react';
import { NavLink as NLink } from 'react-router-dom'

import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
    NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu,
    DropdownItem
} from 'reactstrap';

import { BOOKS, LANDING } from '../constants/routes'


import logo from '../hqwordsLogo.png'
import '../styles/nav.css';


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="y-navbar">
                <Navbar light expand="md">
                    <NavbarBrand tag={NLink} to={LANDING}>
                        <img src={logo} alt='hqwords logo' className='app-logo' />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
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
}