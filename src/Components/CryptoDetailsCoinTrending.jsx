const CryptoDetailsCoinTrending = ({ data }) => {
	console.log(data.item.data.sparkline);
	const formattedPrice =
		data.item.data.price_change_percentage_24h.inr.toFixed(2);
	return (
		<div className='w-full rounded-lg border p-4'>
			<div className='flex lg:gap-4 items-center'>
				<img
					className='w-[2rem] h-[2rem] object-cover rounded-full'
					src={data.item.small}
					alt='image'
				/>
				<h2>{data.item.name}</h2>
				<h3>{formattedPrice}%</h3>
			</div>
			<h1 className='my-2 font-bold'>{data.item.data.market_cap}</h1>
			<div className='w-full'>
				<img
					className='w-full h-full object-cover'
					src={data.item.data.sparkline}
					alt='graph'
				/>
			</div>
		</div>
	);
};

export default CryptoDetailsCoinTrending;
