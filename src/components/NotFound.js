/*
  Not Found
*/

import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
	    <div className="error-page clearfix">
		    <div className="skycom-9">
		        <h1 className="smaller">The page you're looking for could not be found</h1>
		        <p>The link you used may be out of date or the address (url) may have been typed incorrectly. Please check and try again.</p>
		        <a href="http://www.sky.com">
		            <i className="skycon-chevron" aria-hidden="true"></i>
		            Go to Sky.com
		        </a>
		    </div>
		</div>
	)
  }
}

export default NotFound; 
