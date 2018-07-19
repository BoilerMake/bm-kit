import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import App from '../../App';
import Card from '../../components/card';
import Button from '../../components/button';
import TextInput from '../../components/text-input';

storiesOf('Components', module)
  .add('Card', () => (
    <div>
      <Card>
        <div>
          This is a card. You can put a button in the card too.
        </div>
        <Button>see?</Button>
      </Card>
    </div>
  ));
