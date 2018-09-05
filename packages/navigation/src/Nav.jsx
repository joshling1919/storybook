import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavContainer = styled.ul`
  list-style-type: none;
`;

const Nav = ({ links }) => (
  <NavContainer>
    {links.map(({ label, key, ...props }) => (
      <li key={key}>
        <a {...props}>
          {label}
        </a>
      </li>
    ))}
  </NavContainer>
);

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Nav;
