import React from 'react';
import ReactDOM from 'react-dom/client';
//library ที่ใช้ในการเรียกการแสดงผล
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello3 from './component/hello'


// import App from './App';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode> 
// );


class Hello extends React.Component{
	render(){
		return<h1>Hello</h1>
	}
}
const root2 = ReactDOM.createRoot(document.getElementById('root2'))
root2.render(<React.StrictMode><Hello/></React.StrictMode>);

function Hello2(){
  return <h1>Hello2</h1>
}
const root3 = ReactDOM.createRoot(document.getElementById('root3'))
root3.render(<React.StrictMode><Hello2/></React.StrictMode>)

const root4 = ReactDOM.createRoot(document.getElementById('root4'))
root4.render(<React.StrictMode><Hello3/></React.StrictMode>)

reportWebVitals();
