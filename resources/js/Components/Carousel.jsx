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
                    <SwiperSlide key={index}>
                        <div
                            className="flex flex-col gap-4 justify-center items-center w-full max-w-3xl mx-auto p-4 rounded-lg shadow-lg mb-4">
                            {/* Título do projeto */}
                            <h1 className="text-3xl font-bold text-center">
                                {item.name}
                            </h1>

                            {/* Link para o projeto com explicação */}
                            <a href={item.url} target="_blank" rel="noopener noreferrer"
                               className="underline text-lg transition">
                                Ver mais sobre este projeto
                            </a>

                            {/* Imagem do projeto */}
                            <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
                                <img
                                    src={item.image_url}
                                    alt={item.name}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            {/* Descrição do projeto */}
                            <p className="text-lg text-center mt-4">
                                {item.description}
                            </p>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Carousel;
