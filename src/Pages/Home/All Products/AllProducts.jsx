import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import ToyProducts from "./Toys/ToyProducts";
import Cosmetic from "./cosmetic/Cosmetic";
import ElectronicProducts from "./electronic/ElectronicProducts";
import HomeProducts from "./homeProducts/HomeProducts";


const AllProducts = () => {
    return (
        <div className="bg-slate-100 mt-20">
            <SectionTitle 
                heading={'FROM OUR PRODUCTS'}
                subHeading={'---Check it out---'}
            >
            </SectionTitle>
            <HomeProducts></HomeProducts>
            <Cosmetic></Cosmetic>
            <ElectronicProducts></ElectronicProducts>
            <ToyProducts></ToyProducts>
        </div>
    );
};

export default AllProducts;