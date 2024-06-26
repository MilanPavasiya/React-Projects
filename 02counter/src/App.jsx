import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [counter, setCounter] = useState(15);

	const addValue = () => {
		if (counter < 20) {
			setCounter(counter + 1);
		}
	};

	const removeValue = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};

	return (
		<>
			<h1>Chai aur react</h1>
			<h2>Conter Value: {counter}</h2>

			<button className='btn' onClick={addValue}>
				Add value
			</button>
			<button className='btn' onClick={removeValue}>
				Remove value
			</button>
		</>
	);
}

export default App;
