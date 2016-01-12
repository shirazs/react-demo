let utils =  {

  formatPrice :  function(value) {
    
    if (typeof value !== 'number') {
      return;
    }
    
    return '£' + value.toFixed(2);
  },

  formatDate : function(date) {
    
    if (typeof date !== 'string') {
      return date;
    }

    const monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

    let [y, m, d] = date.split('-');

    m = monthNames[parseInt(m, 10) - 1].substr(0, 3);

    return `${d} ${m}`;    
  }
}

export default utils;
