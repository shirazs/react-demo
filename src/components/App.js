/*
  App
*/

import React from 'react';
import reactMixin from 'react-mixin';

import Package from './Package';
import getDataMixin from '../getDataMixin';
import Summary from './Summary';
import utils from '../utils';
let formatDate = utils.formatDate;

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      data: undefined
    }
  }

  componentDidMount() {
    console.info('Did mount. Loading data');
  }

  render() {
    if (this.state.data) {
      var data = this.state.data;

      var periodFrom = data.statement.period.from;
      var periodTo = data.statement.period.to;
      var due = data.statement.due;
      var total = data.package.total + data.skyStore.total + data.callCharges.total;
    }
    return (
      <div className="statement">
        <h1 className="section-title">Your statement - <small>{formatDate(periodFrom)} to {formatDate(periodTo)}</small></h1>
        <Package data={this.state.data} />
        <Summary due={due} total={total} />
      </div>
    )
  }
};

reactMixin.onClass(App, getDataMixin);

export default App;
