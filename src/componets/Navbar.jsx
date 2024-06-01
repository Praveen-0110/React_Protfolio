import React from 'react';
import styled from 'styled-components';
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
  background: #a2e7dc;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: #0f0e0e;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: #2575fc;
  }
`;

export default Navbar;
