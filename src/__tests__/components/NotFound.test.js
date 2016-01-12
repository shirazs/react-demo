'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import NotFound from '../../components/NotFound';

describe('<NotFound /> component', () => {
	
	let renderer;

	beforeEach( () => {
		renderer = TestUtils.createRenderer();
		renderer.render(<NotFound />);
	});

	it('should contain a \'Not Found\' page heading',() => {
		let actual = renderer.getRenderOutput();
		let expected = "The page you're looking for could not be found";
		    
		expect(actual).toIncludeJSX(expected);
	});

	it('should contain a \'Not Found\' message',() => {
		let actual = renderer.getRenderOutput();
		let expected = <p>The link you used may be out of date or the address (url) may have been typed incorrectly. Please check and try again.</p>;
		    
		expect(actual).toIncludeJSX(expected);
	});

});
