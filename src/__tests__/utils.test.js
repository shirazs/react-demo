'use strict';

import expect from 'expect';
import utils from '../utils';

describe('Helper util functions should work', () => {
	
	describe('#formatPrice', () => {
		it('should return a correctly formatted Price', () => {
			expect(utils.formatPrice(5)).toEqual('£5.00');
		});
	});

	describe('#formatDate', () => {
		it('should return a correctly formatted Date', () => {
			expect(utils.formatDate('2016-06-10')).toEqual('10 Jun');
		});
	});

});
