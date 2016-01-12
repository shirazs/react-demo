/*
  getBillData
  getBillData Mixin
*/

const getBillData = {

  getData: function() {
      
    var request = new XMLHttpRequest();
    request.responseType = 'json';

    request.open('GET', 'https://still-scrubland-9880.herokuapp.com/bill.json', true);
  
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = request.response;
        // console.log(data);
    
        // Update the state object
        this.state.data = data;

        // Set the state
        this.setState({
          data : data
        });

      } else {
        console.warn('We reached our target server, but it returned an error');
      }
    }.bind(this);

    request.onerror = function() {
      console.error('connection error occured');
    };

    request.send();  
    
  },

  componentDidMount: function() {
    this.getData();
  }
  
};

export default getBillData;
