import { useEffect, useState } from 'react';
import LikeCarosal from './LikeCarosal';
import apiLinks from '../Utils/links';
import axios from 'axios';

const YouMayLine = () => {
	const [trending, setTrending] = useState('');

	const getTrending = async () => {
		try {
			let { data } = await axios.get(apiLinks.trending);
			setTrending(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getTrending();
	}, []);

	return (
		<div className='bg-white mt-8'>
			<div className='bg-white rounded-lg p-4 max-w-[1200px] m-auto'>
				<h1 className='font-bold text-3xl mb-2'>You may also like</h1>
				<LikeCarosal data={trending} />
				<h1 className='font-bold text-3xl mb-2 my-8'>Trending Coins</h1>
				<LikeCarosal data={trending} />
			</div>
		</div>
	);
};

export default YouMayLine;
