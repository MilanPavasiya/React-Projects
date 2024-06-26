import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card';

function App() {
	const [count, setCount] = useState(0);
	let myObj = {
		usename: 'Milan',
		age: 25,
	};

	let newArr = [1, 2, 3];

	return (
		<>
			<h1 className='bg-yellow-400 text-black p-4 rounded-xl mb-4'>
				Tailwind and DevUI testing
			</h1>
			<Card channel='Code with Milan' />
			<Card />
		</>
	);
}

export default App;
