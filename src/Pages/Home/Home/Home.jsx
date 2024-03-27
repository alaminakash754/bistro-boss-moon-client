import AllProducts from "../All Products/AllProducts";
import Banner from "../Banner/Banner";
import CategoryFood from "../CategoryFood/CategoryFood";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryFood></CategoryFood>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Home;