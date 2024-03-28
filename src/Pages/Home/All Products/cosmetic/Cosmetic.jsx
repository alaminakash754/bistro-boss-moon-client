
import CosmeticCard from "./CosmeticCard";
import useItemProducts from "../../../../Hooks/useItemProducts";


const Cosmetic = () => {
    const [products] = useItemProducts();
    const cosmeticItems = products.filter(item => item.category === 'Cosmetic')
    return (
        <section className="mb-14">
        

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
            {
                cosmeticItems.slice(0,3).map(item => <CosmeticCard key={item._id} item={item}></CosmeticCard>)
            }
        </div>
       </section>
    );
};

export default Cosmetic;