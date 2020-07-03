import React from 'react';

function fun({ nice }): {
    return <div>this is from fun{nice}</div>
}


ReactDOM.render(
    <React.StrictMode>
      
      
      <fun nice="goood"/>
    </React.StrictMode>,
    document.getElementById('root')
  );

 