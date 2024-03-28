import { useEffect, useState } from "react";
import ElectronicProductCard from "./ElectronicProductCard";


const ElectronicProducts = () => {
    const [electronicProducts, setElectronicProducts] = useState([])
    useEffect(() => {
        fetch('homeProducts.json')
        .then(res => res.json())
        .then(data => {
            const electronicItems = data.filter(item => item.category === 'Electronics')
            setElectronicProducts(electronicItems);
        })
    },[])
    return (
        <section className="mb-14">
        

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
            {
                electronicProducts.slice(0,3).map(item => <ElectronicProductCard key={item._id} item={item}></ElectronicProductCard>)
            }
        </div>
       </section>
    );
};

export default ElectronicProducts;