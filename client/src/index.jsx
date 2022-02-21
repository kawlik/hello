import React from 'react'
import ReactDOM from 'react-dom'

//  load styles in order
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/index.scss';

//  load app component
import App from '@/app';


/*	Renderer
/*   *   *   *   *   *   *   *   *   *   */

ReactDOM.render(

	// 	renders whole app
	<React.StrictMode>
		<App />
	</React.StrictMode>,

	// 	refrence to DOM target
	document.getElementById( 'root' )
);