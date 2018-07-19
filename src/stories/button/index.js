import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import App from '../../App';
import Button from '../../components/button';

storiesOf('Components', module)
  .add('Butons', () => (
    <div>
      <Button>Default Button</Button>
      <Button size="large">Large Button</Button>
      <Button size="small">Small Button</Button>
      <Button mood="bad">Bad Button</Button>
    </div>
  ));
