import React from 'react';

function useCurrencyInfo(currency) {
	let data = fetch(
		'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json'
	);

	console.log(data.json());
}

export default useCurrencyInfo;
