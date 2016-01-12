
import '../test-setup';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Accordion from '../../components/Accordion';

var TestContentComponent = ({content}) => (
	<p>Test content here</p>
);

describe('<Accordion /> component', () => {
	
	let renderer;
	let component = <Accordion headings={["Test Heading ..."]} content={[<TestContentComponent />]} />;

	beforeEach( () => {
		renderer = TestUtils.createRenderer();
		renderer.render(component);
	});

	describe('root level element', () => {

		it('should be rendered a ul', () => {
			let actual = renderer.getRenderOutput().type.toUpperCase();
			let expected = 'UL';
			    
			expect(actual).toEqual(expected);
		});	
	});

	describe('the number of heading and content props', () => {

		it('should match', () => {
			let headingProps = component.props.headings.length;
			let contentProps = component.props.content.length;

			expect(headingProps).toEqual(contentProps);
		});
	});

	describe('content passed in props', () => {

		it('should render the content', () => {
			let actual = renderer.getRenderOutput();
			
			let expectedHeading = <span>Test Heading ...</span>;
			expect(actual).toIncludeJSX(expectedHeading);

			let expectedContent = <TestContentComponent />;
			expect(actual).toIncludeJSX(expectedContent);
		});	
	});

	describe('content should be visible when page loads', () => {
		let nodeTrigger, 
			nodeContentDiv;

		beforeEach( () => {
			nodeTrigger = renderer.getRenderOutput().props.children[0].props.children[0];
			nodeContentDiv = renderer.getRenderOutput().props.children[0].props.children[1];
		});

		it('should have the content initially expanded', () => {
			expect(nodeContentDiv.props.className).toInclude('expanded');
		});

	});

	xdescribe('content should be hidden when clicked', () => {

		it('should hide content with click', () => {
			let accordion = TestUtils.renderIntoDocument(component);
			let header = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-heading');
		    let content = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'view-container');

			expect(content[0].className)
				.toExclude('expanded')
				.toInclude('collapsed');

			//@TODO: Figure out how to have a event passed into the simulate click
			//TestUtils.Simulate.click(header[0].getDOMNode());
		});

	});

});
