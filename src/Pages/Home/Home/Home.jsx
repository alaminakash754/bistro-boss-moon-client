import AllProducts from "../All Products/AllProducts";
import Banner from "../Banner/Banner";
import CategoryFood from "../CategoryFood/CategoryFood";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllProducts></AllProducts>
            <CategoryFood></CategoryFood>
        </div>
    );
};

export default Home;