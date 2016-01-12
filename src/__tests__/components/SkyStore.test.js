import '../test-setup';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import SkyStore from '../../components/SkyStore';

import data from '../data/sample-data';

describe('<SkyStore /> component', () => {
	
	let renderer;
	let component = <SkyStore rentals={data.skyStore.rentals} buyAndKeep={data.skyStore.buyAndKeep} total={data.skyStore.total} />;

	beforeEach( () => {
		renderer = TestUtils.createRenderer();
		renderer.render(component);
	});

	describe('rentals prop', () => {

		it('should be an array of objects', () => {
			let actual = Array.isArray(component.props.rentals);
			let expected = true;

			expect(actual).toEqual(expected);

			actual = component.props.rentals.filter( item => typeof item === 'object').length;
			expected = component.props.rentals.length;

			expect(actual).toEqual(expected);
		});

	});

	describe('buyAndKeep prop', () => {

		it('should be an array of objects', () => {
			let actual = Array.isArray(component.props.buyAndKeep);
			let expected = true;

			expect(actual).toEqual(expected);

			actual = component.props.buyAndKeep.filter( item => typeof item === 'object').length;
			expected = component.props.buyAndKeep.length;

			expect(actual).toEqual(expected);
		});	

	});

});

