import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import App from '../../App';
import Button from '../../components/button';

storiesOf('Standard Components', module)
  .add('Butons', () => (
    <div>
      <Button>Default Button</Button>
      <Button size="large">Large Button</Button>
      <Button size="small">Small Button</Button>
      <Button mood="bad">Bad Button</Button>
    </div>
  ));

storiesOf('BM6 Components', module)
  .add('Butons', () => (
    <div>
      <Button bm6>Default Button</Button>
      <Button size="large" bm6>Large Button</Button>
      <Button size="small" bm6>Small Button</Button>
      <Button mood="bad" bm6>Bad Button</Button>
    </div>
  ));
