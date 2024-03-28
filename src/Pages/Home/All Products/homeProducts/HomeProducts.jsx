
import useItemProducts from "../../../../Hooks/useItemProducts";
import HomeItemCard from "./HomeItemCard";

const HomeProducts = () => {
    const [products] = useItemProducts();
    const homeItems = products.filter(item => item.category === 'HomeAppliance')
    return (
        <section className="mb-14 mt-20">
        

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
            {
                homeItems.slice(0,3).map(item => <HomeItemCard key={item._id} item={item}></HomeItemCard>)
            }
        </div>
       </section>
    );
};

export default HomeProducts;