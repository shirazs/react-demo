/*
  Order
  <Order/>
*/

import React from 'react';
import utils from '../utils';
let formatPrice = utils.formatPrice;

class SkyStore extends React.Component {
  
  render() {
    
    return (
      <table className="data" summary="">      
        <thead className="hidden">
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colSpan="2"></td>
            <td className="costing-col">{formatPrice(this.props.total)}</td>
          </tr>
        </tfoot>
        <tbody>
        {
          this.props.buyAndKeep.map( (product,index) => {
            return (
              <tr key={`purchase-${index}`}>
                <td>{product.title}</td>
                <td>Buy and Keep</td>
                <td className="costing-col">{formatPrice(product.cost)}</td>
              </tr>
            )
          })
        }
        {
          this.props.rentals.map( (product,index) => {
            return (
              <tr key={`rental-${index}`}>
                <td>{product.title}</td>
                <td>Rental</td>
                <td className="costing-col">{formatPrice(product.cost)}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    )
  }

};

SkyStore.propTypes = {
  total : React.PropTypes.number.isRequired,
  buyAndKeep : React.PropTypes.array,
  rentals : React.PropTypes.array
}

export default SkyStore;
