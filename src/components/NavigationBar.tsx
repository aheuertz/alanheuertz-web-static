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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavigationBarProps {
    title: string
}

export const NavigationBar = (props: NavigationBarProps) => {
  const loginRedirectUri = encodeURIComponent(window.location.origin);
  // const loginClientId = '2h66cutl6qqi0bdpb3tf3lt578'; // Prod
  // const loginDomain = 'ahtest.auth.us-east-1.amazoncognito.com'; // Prod
  const loginClientId = 'dcdnhbu6dub68jfnapdeq1d83'; // PreProd
  const loginDomain = 'ahlocaltest.auth.us-east-1.amazoncognito.com'; // PreProd

  const loginUri = `https://${loginDomain}/login?response_type=code&client_id=${loginClientId}&redirect_uri=${loginRedirectUri}`;

  return (
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
            <NavItem>
              <NavLink tag={Link} to="/login"><FontAwesomeIcon className="mr-2" icon="user" />Log in</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href={loginUri}>Log in</NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
};
