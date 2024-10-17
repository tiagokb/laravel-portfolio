// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {Pagination, Navigation} from 'swiper/modules';

export const Carousel = ({items}) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index} className={'py-8 sm:px-12 md:px-24'}>
                        <div
                            className="relative flex flex-col rounded-xl bg-clip-border shadow-md">
                            <div
                                className="relative mx-4 -mt-6 max-h-48 sm:max-h-64 md:max-h-96 overflow-hidden rounded-xl bg-primary bg-clip-border shadow-lg">
                                <img
                                    src={item.image_url}
                                    alt={item.name}
                                    className="w-full h-full object-contain object-center"
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-4 p-6">
                                <h1>
                                    {item.name}
                                </h1>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <p>Ver mais sobre este projeto</p>
                                </a>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Carousel;
