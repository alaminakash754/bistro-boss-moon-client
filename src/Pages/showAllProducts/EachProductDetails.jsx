
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { FaCartShopping, FaStar } from "react-icons/fa6";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";

const EachProductDetails = () => {

    const products = useLoaderData();
    const {user} = useAuth();
    const { name, title, image, category, price, _id } = products;
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [ , refetch] = useCart();

    const handleAddToCart = () => {
        
        if(user && user.email){
            const cartItem = {
                productId: _id,
                email: user.email,
                name, 
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to Your Cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   refetch cart to update the cart items
                    refetch();

                }
            })
        }
        else{
            Swal.fire({
                title: "please Logged In",
                text: "Are you login Now?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login Now!"
              }).then((result) => {
                if (result.isConfirmed) {
                 
                   navigate('/login', {state: {from: location}})
                  
                }
              });
              
        }
    }



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
                    <button onClick={handleAddToCart}
                     className="bg-purple-100 text-lg text-purple-700 font-medium btn btn-outline border-0 border-t-4 border-b-4 mb-5 w-1/2"><FaCartShopping></FaCartShopping> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default EachProductDetails;