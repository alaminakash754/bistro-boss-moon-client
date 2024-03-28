import AllProducts from "../All Products/AllProducts";
import Banner from "../Banner/Banner";
import CategoryFood from "../CategoryFood/CategoryFood";
import Testimonial from "../testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllProducts></AllProducts>
            <CategoryFood></CategoryFood>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;