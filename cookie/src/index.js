import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie'
import './index.css';


function MakeCookie() {
  Cookies.set('nameaa','value', {expires : 365});
}

function Root() {
  // MakeCookie();
  return (
    <div>
       <h1>Cookie Example</h1>
    </div>
  )
}

function App() {
  return (
      <div>
        <Root></Root>
      </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
