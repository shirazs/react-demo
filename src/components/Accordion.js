/*
  Accordion
  <Accordion />
*/

import React from 'react';

class Accordion extends React.Component {
  

  toggleClick(e) {
    
    e.preventDefault();
    var target = e.target;
    var chevronClass = target.querySelectorAll('.skycon-chevron-down')[0].classList;
    var contentClass = target.parentNode.querySelectorAll('.view-container')[0].classList;
    
    target.setAttribute('data-toggle-state', target.getAttribute('data-toggle-state') === 'hidden' ? 'shown' : 'hidden')

    chevronClass.toggle('rotate-180');
    
    if (contentClass.contains('expanded') ) { 
      contentClass.remove('expanded');
      contentClass.add('collapsed');
    } else {
      contentClass.remove('collapsed');
      contentClass.add('expanded');
    }
  }

  render() {
    
    return (
      <ul className="accordion" ref="container">
        
        {this.props.content.map( (item, index) => {
          return (
            <li key={'section-' + index}> 
                <a onClick={this.toggleClick} className="accordion-heading" data-toggle-state="shown" data-toggle={"#content-" + (index + 1)} href={"#content-" + (index + 1)}>
                    <span>{this.props.headings[index]}</span> 
                    <i className="skycon-chevron-down colour"></i>
                </a>
                
                <div id={"content-" + (index + 1)} className="view-container expanded">
                    <div className="accordion-content">
                        {item}
                    </div>
                </div>
            </li>
          )

        })}

      </ul>
    )
  }

};

Accordion.propTypes = {
  headings : React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  content : React.PropTypes.arrayOf(React.PropTypes.element).isRequired
}

export default Accordion;
