import React from 'react';
import AboutCards from './AboutCards';

const About = () => {
	return (
		<div className='lg:w-[70%] bg-white rounded-lg p-4 mb-4'>
			<h1 className='font-bold text-3xl mb-2'>About BitCoin</h1>
			<h2 className='font-bold'>What is Bitcoin ?</h2>
			<p className='mb-4'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Reprehenderit recusandae esse ad vitae aliquam suscipit
				perspiciatis provident sint modi tempore consequuntur architecto
				asperiores, expedita laboriosam molestiae voluptates odit eaque
				rem.
			</p>
			<hr />
			<p className='mt-4 font-bold'>Lorem ipsum dolor sit amet.</p>
			<p className='my-4'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Expedita, neque maiores nobis veniam magni quaerat temporibus
				exercitationem suscipit earum maxime nulla officiis ducimus quam
				sapiente voluptatum magnam consectetur? Assumenda, id?
			</p>
			<p className='my-4'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Expedita, neque maiores nobis veniam magni quaerat temporibus
				exercitationem suscipit earum maxime nulla officiis ducimus quam
				sapiente voluptatum magnam consectetur? Assumenda, id?
			</p>
			<p className='my-4'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Expedita, neque maiores nobis veniam magni quaerat temporibus
				exercitationem suscipit earum maxime nulla officiis ducimus quam
				sapiente voluptatum magnam consectetur? Assumenda, id?
			</p>

			<h1 className='font-bold text-xl mb-2'>
				Allready Holding Bitcoin ?
			</h1>
			<div className='lg:flex gap-4'>
				<AboutCards
					heading='calculate your Tax liablity'
					src='https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					bg1='rgb(0,255,201)'
					bg2='linear-gradient(35deg, rgba(0,255,201,0.9781162464985994) 1%, rgba(0,202,255,1) 99%)'
				/>
				<AboutCards
					heading='calculate your profit'
					src='https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					bg1='rgb(255,141,0)'
					bg2='linear-gradient(45deg, rgba(255,141,0,0.9360994397759104) 2%, rgba(255,231,0,0.7456232492997199) 100%)'
				/>
			</div>
			<hr />
			<p className='mt-2'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Voluptas architecto laudantium velit aliquid distinctio
				provident. Facilis tempore, deserunt officiis labore commodi
				exercitationem voluptatum, maxime laudantium inventore sapiente
				in ullam similique.
			</p>
		</div>
	);
};

export default About;
