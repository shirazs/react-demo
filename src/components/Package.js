/*
  Package
  <Package />
*/

import React from 'react';
import Subscriptions from './Subscriptions';
import SkyStore from './SkyStore';
import Accordion from './Accordion';

class Package extends React.Component {
  
  render() {

    if (this.props.data) { // Check if data has loaded

      var data = this.props.data;
      var subscriptions = data.package.subscriptions;
      var packageTotal = data.package.total;
      var callCharges = data.callCharges.total;
      var skyStore = data.skyStore;

      return (
        <Accordion 
          headings={['Your Subscriptions', 'Extras']}
          content={
          [ 
            <Subscriptions data={subscriptions} callCharges={callCharges} total={packageTotal} />,
            <SkyStore rentals={skyStore.rentals} buyAndKeep={skyStore.buyAndKeep} total={skyStore.total} />
          ]
        } />
      )
    
    } else {
    
      return (
        <div className="cushioned">
            <p>Your statement is loading...</p>
        </div>
      )
    }
  }
};

// Package.propTypes = {
//   data: React.propTypes.object
// }

export default Package;

