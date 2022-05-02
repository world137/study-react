import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
//library ที่ใช้ในการเรียกการแสดงผล
import './index.css';
// import reportWebVitals from './reportWebVitals';
// import Hello3 from './component/hello'


// import App from './App';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode> 
// );


// class Hello extends React.Component{
// 	render(){
// 		return<h1>Hello</h1>
// 	}
// }
// const root2 = ReactDOM.createRoot(document.getElementById('root2'))
// root2.render(<React.StrictMode><Hello/></React.StrictMode>);


// function Hello2(){
//   return <h1>Hello2</h1>
// }
// const root3 = ReactDOM.createRoot(document.getElementById('root3'))
// root3.render(<React.StrictMode><Hello2/></React.StrictMode>)
// const root4 = ReactDOM.createRoot(document.getElementById('root4'))
// root4.render(<React.StrictMode><Hello3/></React.StrictMode>)
// reportWebVitals();


// function HelloWorld(){
// 	return(
// 		<React.Fragment>
// 			<div className='content'>
// 				<div className='text'><h3>Hello world</h3></div>
// 			</div>
// 		</React.Fragment>
// 	);
// }
// const root5 = ReactDOM.createRoot(document.getElementById('root5'))
// root5.render(<React.StrictMode><HelloWorld/></React.StrictMode>)


// import JSX from './component/reactJSX';
// const root = ReactDOM.createRoot(document.getElementById('root5'));
// root.render(
//   <React.StrictMode>
//     <JSX/>
//   </React.StrictMode> 
// );


import Props from './component/proparray';
const root = ReactDOM.createRoot(document.getElementById('root5'));
root.render(
  <React.StrictMode>
    <Props/>
  </React.StrictMode> 
);