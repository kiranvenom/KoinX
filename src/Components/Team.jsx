import TechCard from './TechCard';

const Team = () => {
	return (
		<div className='bg-white rounded-lg p-4 lg:w-[70%]'>
			<h1 className='font-bold text-3xl mb-2'>Team</h1>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Exercitationem, eligendi delectus cumque harum soluta
				perferendis assumenda voluptas provident, perspiciatis
				laudantium ipsa accusantium
			</p>
			<TechCard
				name='John Smith'
				src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			/>
			<TechCard
				name='Mike Manja'
				src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			/>
			<TechCard
				name='Emily Suresh'
				src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			/>
		</div>
	);
};

export default Team;
