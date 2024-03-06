import { FaArrowRightLong } from 'react-icons/fa6';

const StartFree = () => {
	return (
		<div className='bg-[#0052FE] text-white flex flex-col items-center p-6 rounded-lg'>
			<h1 className='font-bold text-3xl text-center mb-6'>
				Get started with koinX for Free
			</h1>
			<p className='text-center'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
				nam earum aliquam deleniti at odio molestias
			</p>
			<img
				className='w-[100%] h-[100%]'
				src='./src/assets/images/blog-removebg.png'
				alt='image'
			/>
			<button className='bg-white text-black px-6 py-2 rounded-md font-bold flex items-center gap-4'>
				Get started for FREE
				<FaArrowRightLong />
			</button>
		</div>
	);
};

export default StartFree;
