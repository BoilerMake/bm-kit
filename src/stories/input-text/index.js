import React from 'react';
import { storiesOf } from '@storybook/react';
import InputText from '../../components/text-input';

storiesOf('Components', module)
  .add('Input Text', () => (
    <div>
      <h3>Text Input</h3>
      <InputText placeholder="chj@purdue.edu" />
    </div>
  ));
