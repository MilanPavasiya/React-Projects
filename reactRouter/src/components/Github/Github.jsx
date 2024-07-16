import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
	const data = useLoaderData();
	// const [data, setData] = useState();

	// useEffect(() => {
	// 	fetch('https://api.github.com/users/milanpavasiya')
	// 		.then((res) => res.json())
	// 		.then((data) => setData(data));
	// }, []);

	return (
		<div className='flex justify-center m-4 bg-gray-600 text-white p-4 text-3xl'>
			<div>
				GitHub Profile: {data.name}
				<img
					className='m-8'
					src={data.avatar_url}
					alt='Github picture'
					width={300}
				/>
			</div>
		</div>
	);
}

export default Github;

export const githubInfoLoader = async () => {
	const response = await fetch('https://api.github.com/users/milanpavasiya');
	return response.json();
};
