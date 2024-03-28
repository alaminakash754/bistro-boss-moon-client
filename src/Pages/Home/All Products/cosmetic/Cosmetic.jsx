import { useEffect, useState } from "react";
import CosmeticCard from "./CosmeticCard";


const Cosmetic = () => {
    const [cosmeticProducts, setCosmeticProducts] = useState([])
    useEffect(() => {
        fetch('homeProducts.json')
        .then(res => res.json())
        .then(data => {
            const cosmeticsItems = data.filter(item => item.category === 'Cosmetic')
            setCosmeticProducts(cosmeticsItems);
        })
    },[])
    return (
        <section className="mb-14">
        

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
            {
                cosmeticProducts.slice(0,3).map(item => <CosmeticCard key={item._id} item={item}></CosmeticCard>)
            }
        </div>
       </section>
    );
};

export default Cosmetic;