import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render name from prop', () => {
    const wrapper = shallow(<Button>Click</Button>);
    expect(wrapper.find('.c_button').text()).toContain('Click');
  });
});
