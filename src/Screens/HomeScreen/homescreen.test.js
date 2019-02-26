import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomeScreen from './homeScreen'

configure({adapter: new Adapter()});

describe('<Main/>', () => {
  

    it('should render <Login/>', () => {
        const component=shallow(<HomeScreen/>);
        expect(component).toHaveLength(1);
    });

  
});