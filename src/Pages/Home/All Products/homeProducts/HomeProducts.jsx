import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import HomeItemCard from "./HomeItemCard";

const HomeProducts = () => {
    const [homeProducts, setHomeProducts] = useState([])
    useEffect(() => {
        fetch('homeProducts.json')
        .then(res => res.json())
        .then(data => {
            const homeItems = data.filter(item => item.category === 'HomeAppliance')
            setHomeProducts(homeItems);
        })
    },[])
    return (
        <section className="mb-14 mt-20">
        <SectionTitle
        heading={'FROM OUR PRODUCTS'}
        subHeading={'---Check it out---'}
        >
        </SectionTitle>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
            {
                homeProducts.map(item => <HomeItemCard key={item._id} item={item}></HomeItemCard>)
            }
        </div>
       </section>
    );
};

export default HomeProducts;