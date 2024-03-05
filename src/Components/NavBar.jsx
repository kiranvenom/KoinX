import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
	return (
		<div className='shadow-lg'>
			<div className='pl-4 pr-4 lg:pl-0 lg:pr-0 flex justify-between my-6 items-center mx-auto pb-4 lg:max-w-[1200px]'>
				<img
					className='w-[100px]'
					src='https://lh7-us.googleusercontent.com/TvLUwSeXBErDf9yMpa2BwEOFA8EKepuCaus1b6f-4Qzz3yv4O2YcPRhJu1R1NaTxiF4UH7a6lt8xW4TVlw6W2TIPCZY5_5eKgKRREthnlVtAQ4dEg1rVt5nNzAMSTkjr2rvTiit06ELjWHGGsEH_4Q'
					alt='KoinX'
				/>
				<div className='hidden lg:flex flex-col lg:flex-row gap-4 items-center font-semibold'>
					<li>Crypto Taxes</li>
					<li>Free Tools</li>
					<li>Resource Center</li>
					<button className='bg-blue-500 px-6 py-2 rounded text-white lg:ml-4'>
						Get Started
					</button>
				</div>
				<GiHamburgerMenu className='block lg:hidden' />
			</div>
		</div>
	);
};

export default NavBar;
