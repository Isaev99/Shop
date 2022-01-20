import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


 const Parent =() => {
   const message = " Hello MessageComponent";
   return(
     <div>
       <h1> Parent</h1>
       <MessageComponent />
     </div>
   );
 }
function MessageComponent(props){
  console.log("props", props);
   return( 
     <div>
        <h1> Hello </h1>
     </div>
   )
}


ReactDOM.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
