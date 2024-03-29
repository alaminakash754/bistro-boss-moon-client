import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { FaProductHunt, FaUser, FaCalculator, FaCartPlus, FaAddressBook, FaList } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    
    return (
        <div className="flex">
            {/* dashboard side bar  */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminHome'><IoIosHome></IoIosHome> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItems'><FaProductHunt></FaProductHunt> Add Product</NavLink></li>
                            <li><NavLink to='/dashboard/manageItems'><FaList></FaList> Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/users'><FaUser></FaUser> All Users</NavLink></li>

                            <div className="divider"></div>
                            <li><NavLink to='/'><IoIosHome></IoIosHome>Home</NavLink></li>

                        </>
                            :
                            <>
                                <li><NavLink to='/dashboard/userHome'><IoIosHome></IoIosHome> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory'><FaCalculator></FaCalculator> Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/cart'><FaCartPlus></FaCartPlus> My Cart  ({cart.length})</NavLink></li>
                                <li><NavLink to='/dashboard/reviews'><FaAddressBook></FaAddressBook> Add a Review</NavLink></li>

                                <div className="divider"></div>
                                <li><NavLink to='/'><IoIosHome></IoIosHome>Home</NavLink></li>

                            </>

                    }
                </ul>

            </div>
            {/* dashboard content  */}
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;