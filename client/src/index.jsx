import React from 'react'
import ReactDOM from 'react-dom'

//  load main stylesheet
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