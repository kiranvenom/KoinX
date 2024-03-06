import { CgCommunity } from 'react-icons/cg';

const SentimentCard = ({ color }) => {
	return (
		<div className={`flex gap-6 ${color} rounded-lg p-4`}>
			<CgCommunity size={50} />
			<div className='w-[90vw] lg:w-[70vh] shrink-0'>
				<h1 className='font-bold'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Nam laboriosam id culpa.
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Veritatis, voluptatibus laudantium nulla architecto illo
					vitae ea, commodi saepe magnam provident sint laboriosam
					repellat numquam mollitia sapiente non temporibus velit
					accusamus.
				</p>
			</div>
		</div>
	);
};

export default SentimentCard;
