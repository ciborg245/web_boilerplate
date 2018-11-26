import React from 'react';
import Renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import App from "./app";

test('Test the rendering of the application.', () => {
    const component = Renderer.create(<App />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})
