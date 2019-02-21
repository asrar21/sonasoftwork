import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './login'

configure({adapter: new Adapter()});

describe('<Main/>', () => {
  

    it('should render <Login/>', () => {
        const component=shallow(<Login/>);
        expect(component).toHaveLength(1);
    });

  
});