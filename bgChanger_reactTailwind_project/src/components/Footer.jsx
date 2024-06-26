import { React, createElement, useState } from 'react';

function Footer({ colorArr }) {
	const [color, setColor] = useState('black');

	function changeBgColor(color) {
		document.querySelector('body').style.backgroundColor = { color };
	}

	function createButtons(colorArr) {
		for (let i = 0; i < colorArr.length; i++) {
			let color = colorArr[i];
			const ele = {};

			// const button = document.createElement('button');
			// button.setAttribute('');

			ele = createElement('button', {
				className:
					'mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
				onClick: { changeBgColor },
				name: { color },
				value: { color },
			});
		}
		return ele;
	}

	return (
		<>
			{createButtons}
			<div class='flex space-x-4'>
				<button class='px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black'>
					Buy now
				</button>
			</div>
		</>
	);
}

export default Footer;
