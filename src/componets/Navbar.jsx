import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Navbar = ({ items }) => {
  return (
    <Nav>
     
      <NavList>
        {items.map((item, index) => (
          <NavItem key={index}>
            <NavLink to={`/${item.toLowerCase().replace(/ /g, '-')}`}>
              {item}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
}

// Styled components
const Nav = styled.nav`
  background: #aae2da;
  padding: 2rem;
  /* margin: 1rem; */
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
  text-align: center;
`;

const NavLink = styled(Link)`
  color: #0f0e0e;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
