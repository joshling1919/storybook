import React from 'react';
import { storiesOf } from '@storybook/react';
import UnstyledNav from './UnstyledNav';

export default (root) => {
  storiesOf('Navigation', root).add('Unstyled', () => <UnstyledNav />);
};
