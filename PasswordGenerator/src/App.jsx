import { useState } from 'react';
import './App.css';

function App() {
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [password, setPassword] = useState('');

	const passwordGenerator = (length) => {
		const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const password = alphabet[Math.floor(Math.random() * length)];

		return password;
	};

	return (
		<>
			<div className='flex flex-col justify-center '>
				<h1 className='text-4xl text-center text-gray-400'>
					Password Generator
				</h1>
				<div className='flex w-full justify-center space-x-1 md:w-1/3'>
					<p
						className='bg-white flex h-10 w-full rounded-md border border-white bg-transparent px-3 py-2 text-2xl placeholder:text-orange-500 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
						type='email'>
						{passwordGenerator.call()}
					</p>
					<button
						type='button'
						className='rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>
						Copy
					</button>
				</div>
				<div>
					{/* scroller */}
					<p className='text-orange-400'>Length</p>
					{/* counter */}
				</div>
			</div>
		</>
	);
}

export default App;
