
import * as React from 'react';
import { shallow } from 'enzyme';
import Component from '../Component';

describe('<Component /> component', () => {
    it('should render a div with className .Component', () => {
        const Component = shallow(<Component />);
        expect(Component.find('div.Component').length).toBe(1);
    });
});
