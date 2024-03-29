
import { useLoaderData } from "react-router-dom";
import { FaCartShopping, FaStar } from "react-icons/fa6";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const EachProductDetails = () => {

    const products = useLoaderData();

    const { name, title, image, category, price } = products;



    return (
        <div>
            <SectionTitle
                subHeading={'-- Life Style Appliance --'}
                heading={'One of our BEST product'}
            >

            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-20">
                <div>
                    <img className="rounded-t-md rounded-r-md border-4 border-gray-300 p-4 w-[500px] h-[350px]" src={image} alt="" />
                </div>
                <div className="space-y-4 mt-5">
                    <div className="flex gap-5 items-center">
                        <FaStar></FaStar> <p className="font-medium">5.0 Average Rating</p>
                    </div>
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <h4 className="font-medium">{title}</h4>
                    <p className="font-medium text-lg">{category}</p>
                    <h2 className="text-purple-700 text-2xl mt-5 font-bold">$ {price}</h2>
                    <button className="bg-purple-100 text-lg text-purple-700 font-medium btn btn-outline border-0 border-t-4 border-b-4 mb-5 w-1/2"><FaCartShopping></FaCartShopping> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default EachProductDetails;