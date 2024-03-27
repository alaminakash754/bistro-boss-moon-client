import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/banner.jpg'
import img2 from '../../../assets/home/banner2.jpg'
import img3 from '../../../assets/home/banner 08.jpg'
import img4 from '../../../assets/home/banner 7.jpg'
import img5 from '../../../assets/home/banner3.jpg'
import img6 from '../../../assets/home/banner 6.jpg'


const Banner = () => {
    return (
        <Carousel  showArrows={true} className="text-center">
                <div>
                    <img className="" src={img1} />
                   
                </div>
                <div>
                    <img src={img2}/>
                   
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4} />
                   
                </div>
                <div>
                    <img src={img5}/>
                   
                </div>
                <div>
                    <img src={img6} />
                    
                </div>
            </Carousel>
    );
};

export default Banner;