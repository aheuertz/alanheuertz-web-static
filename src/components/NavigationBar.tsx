import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';

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
            <NavLink tag={Link} to="/projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/aheuertz" target="_blank">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
);
