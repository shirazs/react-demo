
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import App from '../../components/App';

describe('<App /> component', () => {
	
	let renderer;
	let component = <App />;

	beforeEach( () => {
		renderer = TestUtils.createRenderer();
		renderer.render(component);
	});

	describe('heading', () => {

		it('should render a h1', () => {
			let actual = renderer.getRenderOutput().props.children[0].type;
			let expected = 'h1';
			expect(actual).toEqual(expected);
		});	

	});

	describe('page title', () => {

		it('should render text', () => {
			let actual = renderer.getRenderOutput();
			let expected = 'Your statement';
			expect(actual).toIncludeJSX(expected);
		});	
	});

});
