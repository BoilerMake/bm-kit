import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './index';

describe('TextInput', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<TextInput />);
    expect(wrapper).toHaveLength(1);
  });
});
