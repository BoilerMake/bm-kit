import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './index';

describe('Button', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper).toHaveLength(1);
  });
});
