import React from 'react';

const Nav = ({ links }) => (
  <ul>
    {links.map(({ label, href }) => (
      <li>
        <a href={href}>
          {label}
        </a>
      </li>
    ))}
  </ul>
);
