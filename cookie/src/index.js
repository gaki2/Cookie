import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie'
import './index.css';

function makeCookies() {
  Cookies.set('title','value');
}

function Root() {
  makeCookies();
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
