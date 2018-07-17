import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import App from '../../App';
import Card from '../../components/card';

storiesOf('Components', module)
  .add('Card', () => (
    <div>
      <Card>
        This is a card
      </Card>
    </div>
  ));
