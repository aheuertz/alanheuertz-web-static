import React, { useState } from 'react';
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
import NavbarToggler from 'reactstrap/lib/NavbarToggler';

interface NavigationBarProps {
    title: string
}

export const NavigationBar = (props: NavigationBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/charts">Charts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/board-games">Board Games</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to="/login"><FontAwesomeIcon className="mr-2" icon="user" />Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
};
