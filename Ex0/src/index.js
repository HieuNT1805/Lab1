import React from 'react';
import ReactDOM from 'react-dom/client';


import MySelection from './MySelection';
import MyBotton from './MyButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MySelection>
    <MyBotton>My Button Text</MyBotton>
  </MySelection>

);

