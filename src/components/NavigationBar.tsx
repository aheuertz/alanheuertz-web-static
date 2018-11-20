import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

interface NavigationBarProps {
    title: string
}

export const NavigationBar = (props: NavigationBarProps) => (
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">{props.title}</NavbarBrand>
            {/* <NavbarToggler onClick={this.toggle} /> */}
            <Collapse isOpen={true} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="http://hueydev-redux-sandbox-static.s3-website-us-east-1.amazonaws.com/">Redux Sandbox</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/aheuertz">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
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
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
);
