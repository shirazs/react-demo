/* 
  StorePicker
  This will let us make <StorePicker/>
*/

import React from 'react';
import { Link } from 'react-router';
import utils from '../utils';
let formatPrice = utils.formatPrice;

class Subscriptions extends React.Component {

  render() {

    var callChargesTotal = <span className="call-charges-total">{formatPrice(this.props.callCharges)}</span>;

    return (
      <table className="data" summary="">
        
        <thead className="hidden">
          <tr>
            <th>Package name</th>
            <th>Type</th>
            <th>Cost</th>
          </tr>
        </thead>

        <tfoot>
          <tr>
            <td colSpan="2"></td>
            <td className="costing-col">{formatPrice(this.props.total + this.props.callCharges)}</td>
          </tr>
        </tfoot>
      
        <tbody>
        {
          this.props.data.map( subscription => {
            return (
              <tr key={subscription.type}>
                <td>{subscription.name}</td>
                
                <td className={`type-${subscription.type}`}>
                  {subscription.type}
                  {subscription.type === 'talk' && <Link to="/itemised-bill" className="call-charges" title="View itemised call charges">Call charges</Link>}
                </td>
                
                <td className="costing-col">
                  {formatPrice(subscription.cost)}
                  {subscription.type === 'talk' && callChargesTotal}
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    )
  }
}

Subscriptions.propTypes = {
  data : React.PropTypes.array.isRequired,
  callCharges : React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
}

// reactMixin.onClass(StorePicker, History);

export default Subscriptions;
