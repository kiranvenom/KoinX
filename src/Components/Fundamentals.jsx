import FundamentalDetails from './fundamentalDetails';

const Fundamentals = ({ data }) => {
	if (!data) {
		return undefined;
	}
	console.log(data.data.market_data);
	return (
		<div>
			<h1 className='font-bold text-3xl my-'>Fundamentals</h1>
			<div className='grid lg:grid-cols-2 lg:gap-14'>
				<div>
					<FundamentalDetails
						heading='Bitcoin price'
						val={data.data.market_data.current_price.inr}
					/>
					<FundamentalDetails
						heading='24 low / 24 high'
						val={`${data.data.market_data.low_24h.inr} / ${data.data.market_data.high_24h.inr}`}
					/>
					<FundamentalDetails
						heading='7d in currency'
						val={`${data.data.market_data.price_change_percentage_7d_in_currency.inr}`}
					/>
					<FundamentalDetails
						heading='Total volume'
						val={data.data.market_data.total_volume.inr}
					/>
					<FundamentalDetails
						heading='Market cap Rank'
						val={`#${data.data.market_data.market_cap_rank}`}
					/>
				</div>
				<div>
					<FundamentalDetails
						heading='Market cap'
						val={data.data.market_data.market_cap.inr}
					/>
					<FundamentalDetails
						heading='Market cap Domiance'
						val='36.35%'
					/>
					<FundamentalDetails
						heading='Volume / market cap'
						val='0.0852'
					/>
					<FundamentalDetails heading='All time High' val='$690,77' />
					<FundamentalDetails heading='All time Low' val='$6,77' />
				</div>
			</div>
		</div>
	);
};

export default Fundamentals;
