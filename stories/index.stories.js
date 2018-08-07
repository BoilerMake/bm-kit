import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, TextInput, Card, Checkbox } from '../src';

storiesOf('Button', module)
  .add('Standard Buttons', () => (
    <div>
      <div>
        <Button onClick={action('clicked')}>Default Button</Button>
      </div>
      <div>
        <Button onClick={action('clicked')} disabled>Disabled Button</Button>
      </div>
      <div>
        <Button onClick={action('clicked')} disabled full>Full Button</Button>
      </div>
    </div>
  ));

storiesOf('Text Input', module)
  .add('Standard Inputs', () => (
    <div>
      <div>
        <TextInput
          placeholder="John Doe"
          label="First Name" />
      </div>
      <div>
        <TextInput
          label="First Name"
          optional
          helpText="Poopity Scoop" />
      </div>
      <div>
        <TextInput
          label="First Name"
          optional
          hasError
          errorText="This is an error message"
          helpText="Poopity Scoop" />
      </div>
      <div>
        <TextInput
          label="First Name"
          disabled />
      </div>
    </div>
  ));

storiesOf('Card', module)
  .add('Card', () => (
    <Card>
      This is a card
    </Card>
  ));

storiesOf('Checkbox', module)
  .add('Checkbox', () => (
    <div>
      <div>
        <Checkbox label="I am 18 years or older" checked/>
      </div>
      <div>
        <Checkbox label="I am 18 years or older"/>
      </div>
      <div>
        <Checkbox label="I am 18 years or older" disabled/>
      </div>
    </div>
  ));
