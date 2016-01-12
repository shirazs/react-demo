import '../test-setup';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Summary from '../../components/Summary';

import data from '../data/sample-data';

describe('<Summary /> component', () => {
	
	let renderer;
	let component = <Summary due={"2016-01-15"} total={112} />;

	beforeEach( () => {
		renderer = TestUtils.createRenderer();
		renderer.render(component);
	});

	describe('Summary statement', () => {

		it('should include a correctly formatted Date', () => {
			let actual = renderer.getRenderOutput();
			let expected = "15 Jan";
			expect(actual).toIncludeJSX(expected);
		});

		it('should include a correctly formatted Price', () => {
			let actual = renderer.getRenderOutput();
			let expected = "£112.00";
			expect(actual).toIncludeJSX(expected);
		});

	});

});

