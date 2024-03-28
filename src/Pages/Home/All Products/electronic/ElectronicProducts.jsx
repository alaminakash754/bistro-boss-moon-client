
import useItemProducts from "../../../../Hooks/useItemProducts";
import ElectronicProductCard from "./ElectronicProductCard";



const ElectronicProducts = () => {
    const [products] = useItemProducts();
    const electronicItems = products.filter(item => item.category === 'Electronics')
   
    return (
        <section className="mb-14">
        

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
            {
                electronicItems.slice(0,3).map(item => <ElectronicProductCard key={item._id} item={item}></ElectronicProductCard>)
            }
        </div>
       </section>
    );
};

export default ElectronicProducts;