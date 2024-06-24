import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
	return (
		<>
			<h1>this is MyApp component</h1>
		</>
	);
}

// const reactElement = {
// 	type: 'a',
// 	props: {
// 		href: 'http://google.com',
// 		target: '_blank',
// 	},
// 	children: 'click me to visit google',
// };

const reactElement = React.createElement(
	'a',
	{
		href: 'http://google.com',
		target: '_blank',
	},
	'Click me to visit google'
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
