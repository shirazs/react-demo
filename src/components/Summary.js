/*
  Summary
  <Summary/>
*/

import React from 'react';
import utils from '../utils';
let formatPrice = utils.formatPrice;
let formatDate = utils.formatDate;

class Summary extends React.Component {

  render() {
    
    return (
      <section className="cushioned summary clearfix">
        <h2 className="section-title">Total <small>due {formatDate(this.props.due)}</small></h2>
        <strong className="amount">{formatPrice(this.props.total)}</strong>
      </section>
    )
  }

};

Summary.propTypes = {
  total : React.PropTypes.number,
  due : React.PropTypes.string
}

export default Summary;
