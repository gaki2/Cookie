import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie'
import './index.css';


function MakeCookie() {
  Cookies.set('goodcookie', '4000', { expires : 7});
}

function Root() {
  MakeCookie();
  getCookie();
  return (
    <div>
       <h1>Cookie Example</h1>
    </div>
  )
}

function getCookie() {
  let cookies = document.cookie;
  console.log(cookies);
}

function App() {
  return (
      <div>
        <Root></Root>
      </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
