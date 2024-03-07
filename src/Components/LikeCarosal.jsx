// import { Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// import CryptoDetailsCoinTrending from './CryptoDetailsCoinTrending';

// const LikeCarosal = ({ data }) => {
// 	console.log(data.coins);

// 	return (
// 		<Swiper
// 			modules={[Navigation]}
// 			spaceBetween={8}
// 			slidesPerView={2}
// 			navigation
// 			breakpoints={{
// 				786: {
// 					slidesPerView: 4,
// 				},
// 			}}>
// 			{/* <SwiperSlide>
// 				<CryptoDetailsCoinTrending />
// 			</SwiperSlide> */}
// 			{data.coins.map((coin) => {
// 				<SwiperSlide>
// 					<CryptoDetailsCoinTrending />
// 				</SwiperSlide>;
// 			})}
// 		</Swiper>
// 	);
// };

// export default LikeCarosal;

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CryptoDetailsCoinTrending from './CryptoDetailsCoinTrending';

const LikeCarosal = ({ data }) => {
	if (data.length == 0) {
		return null;
	}

	return (
		<Swiper
			modules={[Navigation]}
			spaceBetween={8}
			slidesPerView={2.2}
			navigation
			breakpoints={{
				786: {
					slidesPerView: 4.2,
				},
			}}>
			{data.coins.map((coin) => (
				<SwiperSlide key={coin.id}>
					<CryptoDetailsCoinTrending data={coin} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default LikeCarosal;
