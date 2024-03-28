
import { useState } from "react";
import useItemProducts from "../../Hooks/useItemProducts";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import AllProductCard from "./AllProductCard";


const ShowAllProducts = () => {
    const [products] = useItemProducts();
    const [searchName, setSearchName] = useState('');
    const [searchCategory, setSearchCategory] = useState('');
    
    return (
        <section className="bg-slate-100">

            <SectionTitle
                subHeading={'Check it Out'}
                heading={'Our All Goods Things'}
            >

            </SectionTitle>
            <div className="mt-10 grid grid-cols-2 w-5/6 mx-auto">
                    <form className="mr-20">
                        <p className="mb-5 text-purple-500">Search By Name</p>
                        <input onChange={(e) => setSearchName(e.target.value)} className="outline-double outline-purple-700 rounded-lg p-2 w-full" type="text" placeholder="Search by Name" />
                    </form>
                    <form className="ml-20">
                        <p className="mb-5 text-purple-500">Search by Category </p>
                    <input onChange={(e) => setSearchCategory(e.target.value)} className="outline-double outline-purple-700 rounded-lg p-2 w-full" type="text" placeholder="Search by Category" />
                    </form>
                </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 mt-10">
                {
                    products.filter((product) => {
                        return searchName.toLowerCase() === '' 
                        ? product 
                        : 
                        product.name.toLowerCase().includes(searchName)
                    }).filter((product) => {
                        return searchCategory.toLowerCase() === '' 
                        ? product 
                        : 
                        product.category.toLowerCase().includes(searchCategory)
                    }).map(item => <AllProductCard key={item._id} item={item}></AllProductCard>)
                }
            </div>
        </section>
    );
};

export default ShowAllProducts;