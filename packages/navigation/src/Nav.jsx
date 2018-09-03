import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ links }) => (
  <ul>
    {links.map(({ label, key, ...props }) => (
      <li key={key}>
        <a {...props}>
          {label}
        </a>
      </li>
    ))}
  </ul>
);

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Nav;
