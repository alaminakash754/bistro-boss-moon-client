import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/04.jpg';
import img2 from '../../../assets/home/05.jpg';
import img3 from '../../../assets/home/01.jpg';
import img4 from '../../../assets/home/10.jpg';
import img5 from '../../../assets/home/12.jpg';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';



const CategoryFood = () => {
    return (
        <section className='mt-10'>
            <SectionTitle
            subHeading={'24 Hours ready to service you'}
            heading={'ORDER ONLINE'}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper  mt-10 mb-4"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='text-2xl uppercase text-center -mt-16 shadow-slate-100 text-purple-700'>Balender</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='text-2xl uppercase text-center -mt-8 shadow-slate-100 text-purple-700'>Baby Toys</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    
                    <h3 className='text-2xl uppercase text-center -mt-8 shadow-slate-100 text-purple-700'>Headphone</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className='text-2xl uppercase text-center -mt-16 shadow-slate-100 text-purple-700'>Washing Machine</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className='text-2xl uppercase text-center -mt-8 shadow-slate-100 text-purple-700'>Home Appliance</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default CategoryFood;