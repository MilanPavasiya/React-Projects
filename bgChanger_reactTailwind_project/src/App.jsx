import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Footer from './components/Footer';

function App() {
	let colors = ['Red', 'Green', 'Blue', 'Olive', 'Gray', 'Yellow'];

	return (
		<>
			<Footer colorArr={colors} />
		</>
	);
}

export default App;
