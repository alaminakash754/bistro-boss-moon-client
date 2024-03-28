import { useEffect, useState } from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import AllProductCard from "./AllProductCard";


const ShowAllProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        fetch('homeProducts.json')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);
            })
    }, [])
    return (
        <section className="">

            <SectionTitle
                subHeading={'Check it Out'}
                heading={'Our All Goods Things'}
            >

            </SectionTitle>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
                {
                    allProducts.map(item => <AllProductCard key={item._id} item={item}></AllProductCard>)
                }
            </div>
        </section>
    );
};

export default ShowAllProducts;