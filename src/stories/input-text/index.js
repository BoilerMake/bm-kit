import React from 'react';
import { storiesOf } from '@storybook/react';
import InputText from '../../components/text-input';

storiesOf('Standard Components', module)
  .add('Input Text', () => (
    <div>
      <h3>Text Input</h3>
      <InputText placeholder="chj@purdue.edu" />
    </div>
  ));

storiesOf('BM6 Components', module)
  .add('Input Text', () => (
    <div>
      <h3>Text Input</h3>
      <InputText bm6 label="Email" placeholder="chj@purdue.edu" />
    </div>
  ));
