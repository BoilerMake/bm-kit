import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import App from '../../App';
import Button from '../../components/button';

storiesOf('Components', module)
  .add('Butons', () => (
    <div>
      <h3>Default Button</h3>
      <Button>
        Click Me
      </Button>
      <h3>Large Button</h3>
      <Button size="large">
        Click Me
      </Button>
      <h3>Small Button</h3>
      <Button size="small">
        Click Me
      </Button>
      <h3>Good Button</h3>
      <Button mood="good">
        Click Me
      </Button>
      <h3>Bad Button</h3>
      <Button mood="bad">
        Click Me
      </Button>
    </div>
  ));
