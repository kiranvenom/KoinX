import { useEffect, useState } from 'react';
import apiLinks from '../Utils/links';
import axios from 'axios';

const TrendingTopCoin = () => {
	const [trending, setTrending] = useState([]);

	const getTopThree = async () => {
		try {
			let response = await axios.get(apiLinks.trending);
			let top3 = response.data.coins.splice(0, 3);
			setTrending(top3);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getTopThree();
	}, []);

	if (trending.length === 0) {
		return <li>loading</li>;
	}

	return (
		<div className=' bg-white p-4 rounded-md'>
			<h1 className='mb-10'>Trending Coins (24h)</h1>
			<ul>
				{trending.map((crypto, idx) => (
					<div className='flex items-center gap-4 my-2' key={idx}>
						<img src={crypto.item.small} alt={crypto.item.name} />
						<h6 className='text-sm'>{crypto.item.name}</h6>
					</div>
				))}
			</ul>
		</div>
	);
};

export default TrendingTopCoin;
