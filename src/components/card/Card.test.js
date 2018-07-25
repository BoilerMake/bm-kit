import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('MyComponent', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Card></Card>);
    expect(wrapper).toHaveLength(1);
  });

  it('should render name from prop', () => {
    const wrapper = shallow(<Card>Card</Card>);
    expect(wrapper.find('.c_card').text()).toContain('Card');
  });
});
