import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

// https://github.com/styled-components/styled-components/issues/1226
//

// What I'll likely do is actually keep Nav purely unstyled. and then add all relevant styling here.
const SideNav = styled(Nav)`
  background: red;
`;
// const links = [{ label: 'hi', href: '#', key: 'placeholder123' }];

// const SideNav = () => (
//   <SideNavContainer>
//     <Nav links={links} />
//   </SideNavContainer>
// );
export default SideNav;
