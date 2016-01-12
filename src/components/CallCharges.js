/* 
  StorePicker
  This will let us make <StorePicker/>
*/

import React from 'react';
// import { History } from 'react-router';
import reactMixin from 'react-mixin';
import getDataMixin from '../getDataMixin';
import utils from '../utils';
let formatPrice = utils.formatPrice;

class CallCharges extends React.Component {

  constructor() {
    super();

    this.state = {
      data: undefined
    }
  }

  render() {

    if (this.state.data) {

        return (
          <div className="itemised-bill">
            <h1 className="section-title">Call charges</h1>
      
              <table className="data itemised" summary="">      
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Duration</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                
                <tfoot>
                  <tr>
                    <td colSpan="2">Total</td>
                    <td>{formatPrice(this.state.data.callCharges.total)}</td>
                  </tr>
                </tfoot>
                
                <tbody>
                  {
                    this.state.data.callCharges.calls.map( (call, index) => {
                      return (
                        <tr key={index++}>
                          <td>{call.called}</td>
                          <td>{call.duration}</td>
                          <td>{formatPrice(call.cost)}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          </div>
        )
    } else {
      return <p>Loading...</p>
    }
  }
}

reactMixin.onClass(CallCharges, getDataMixin);

export default CallCharges;
