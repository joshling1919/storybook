import React from 'react';
import { storiesOf } from '@storybook/react';
import Nav from '../../packages/navigation/src/Nav';
import SideNav from '../../packages/navigation/src/SideNav';
import { links } from './mockData';

export default (root) => {
  storiesOf('Navigation', root)
    // .add('Unstyled', () => <Nav links={links} />)
    .add('Side', () => <SideNav links={links} />);
};
