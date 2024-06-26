import { React, createElement, useState } from 'react';

function Footer() {
	const [color, setColor] = useState('white');

	return (
		<>
			<div
				className='w-full h-screen duration-200'
				style={{ backgroundColor: color }}>
				<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
					<div className='flex flex-wrap justify-center gap-3 shadow-xl bg-gray-200 px-3 py-2 rounded-2xl'>
						<button
							onClick={() => setColor('Red')}
							className='ouline-none px-4 py-1 rounded-full text-white shadow-lg'
							style={{ backgroundColor: 'Red' }}>
							Red
						</button>
						<button
							onClick={() => setColor('Green')}
							className='ouline-none px-4 py-1 rounded-full text-white shadow-lg'
							style={{ backgroundColor: 'Green' }}>
							Green
						</button>
						<button
							onClick={() => setColor('Blue')}
							className='ouline-none px-4 py-1 rounded-full text-white shadow-lg'
							style={{ backgroundColor: 'Blue' }}>
							Red
						</button>
						<button
							onClick={() => setColor('Olive')}
							className='ouline-none px-4 py-1 rounded-full text-white shadow-lg'
							style={{ backgroundColor: 'Olive' }}>
							Blue
						</button>
						<button
							onClick={() => setColor('Gray')}
							className='ouline-none px-4 py-1 rounded-full text-white shadow-lg'
							style={{ backgroundColor: 'Gray' }}>
							Gray
						</button>
						<button
							onClick={() => setColor('orange')}
							className='ouline-none px-4 py-1 rounded-full text-white shadow-lg'
							style={{ backgroundColor: 'orange' }}>
							Yellow
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
