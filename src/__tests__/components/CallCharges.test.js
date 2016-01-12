import '../test-setup';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import CallCharges from '../../components/CallCharges';

describe('<CallCharges /> component', () => {
	
	let renderer;
	let component = <CallCharges />;

	beforeEach( () => {
		renderer = TestUtils.createRenderer();
		renderer.render(component);
	});


	describe('before data is received a loading message ', () => {

		it('should be rendered', () => {
			let actual = renderer.getRenderOutput();
			let expected = 'Loading...';

			expect(actual).toIncludeJSX(expected);

		});	

	});

	xdescribe('a data table ', () => {

		it('should be rendered', () => {
			let actual = renderer.getRenderOutput().type;
			let expected = 'table';

			expect(actual).toEqual(expected);

		});	

	});

});

