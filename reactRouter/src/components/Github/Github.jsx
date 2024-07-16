import React, { useEffect, useState } from 'react';

function Github() {
	const [data, setData] = useState();

	useEffect(() => {
		fetch('https://api.github.com/users/milanpavasiya')
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
			Github Profile name : {data.name}
			<img src={data.avatar_url} alt='Github picture' width={300} />
		</div>
	);
}

export default Github;
