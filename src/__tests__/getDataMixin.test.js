'use strict';

import expect from 'expect';
import getDataMixin from '../getDataMixin';
const getBillData = getDataMixin.getData;

xdescribe('getBillData', () => {

	it('Should return JSON', () => {
		expect(getBillData).toEqual('JSON');
	});

});