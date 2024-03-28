
import ToyCard from "./ToyCard";
import useItemProducts from "../../../../Hooks/useItemProducts";


const ToyProducts = () => {
    const [products] = useItemProducts();
    const toyItems = products.filter(item => item.category === 'Baby Toys')
    return (
        <section className="mb-14">
        

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
            {
                toyItems.slice(0,3).map(item => <ToyCard key={item._id} item={item}></ToyCard>)
            }
        </div>
       </section>
    );
};

export default ToyProducts;