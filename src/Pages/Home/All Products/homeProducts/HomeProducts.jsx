import { useEffect, useState } from "react";
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
        

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
            {
                homeProducts.slice(0,3).map(item => <HomeItemCard key={item._id} item={item}></HomeItemCard>)
            }
        </div>
       </section>
    );
};

export default HomeProducts;