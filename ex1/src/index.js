import React from 'react';
import ReactDOM from 'react-dom/client';

import MyBotton from './MyButton';

const root = ReactDOM.createRoot(document.getElementById('root'));


function render({ second }){
  root.render(
   <main>
    <MyBotton/>
    <MyBotton text={second.text} disabled={second.disabled} />
   </main>
  );
}
render({
  second:{
    text: "Second Button",
    disabled: true,
  }
});

