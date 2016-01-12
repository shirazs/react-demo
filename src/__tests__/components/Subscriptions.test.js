import '../test-setup';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Subscriptions from '../../components/Subscriptions';

import data from '../data/sample-data';

describe('<Subscriptions /> component', () => {
	
	let renderer;
	let component = <Subscriptions data={data.package.subscriptions} callCharges={data.callCharges.total} total={data.package.total} />;

	beforeEach( () => {
		renderer = TestUtils.createRenderer();
		renderer.render(component);
	});

	describe('data prop', () => {

		it('should be an array of objects', () => {
			let actual = Array.isArray(component.props.data);
			let expected = true;

			expect(actual).toEqual(expected);

			actual = component.props.data.filter( item => typeof item === 'object').length;
			expected = component.props.data.length;

			expect(actual).toEqual(expected);
		});	

	});

});

