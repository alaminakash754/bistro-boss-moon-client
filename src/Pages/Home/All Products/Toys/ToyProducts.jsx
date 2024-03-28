import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";


const ToyProducts = () => {
    const [toyProducts, setToyProducts] = useState([])
    useEffect(() => {
        fetch('homeProducts.json')
        .then(res => res.json())
        .then(data => {
            const toyItems = data.filter(item => item.category === 'Baby Toys')
            setToyProducts(toyItems);
        })
    },[])
    return (
        <section className="mb-14">
        

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
            {
                toyProducts.slice(0,3).map(item => <ToyCard key={item._id} item={item}></ToyCard>)
            }
        </div>
       </section>
    );
};

export default ToyProducts;