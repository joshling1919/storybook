import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../../packages/cards/src/Card';

export default (root) => {
  storiesOf('Flash Cards', root).add('Flash Card', () => <Card />);
};
