import React from 'react';
import ReactDOM from 'react-dom';
// import './css/index.css';
//import OneThousandWords from './components/OneThousandWords';

import Router from './components/Router';

/* ReactDOM.render(
	<OneThousandWords />,

	document.getElementById('root')
); */

ReactDOM.render(
	<Router />,

	document.querySelector('#main')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
