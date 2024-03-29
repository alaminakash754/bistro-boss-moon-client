import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { FaProductHunt, FaUser, FaCalculator, FaCartPlus, FaAddressBook, FaList } from "react-icons/fa6";
import { RiLogoutCircleFill } from "react-icons/ri";
import { IoIosHome } from "react-icons/io";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const DashBoard = () => {
    const { logOut } = useAuth();
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    
    return (
        <div className="flex">
            {/* dashboard side bar  */}
            <div className="w-64 min-h-screen bg-purple-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminHome'><IoIosHome></IoIosHome> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItems'><FaProductHunt></FaProductHunt> Add Product</NavLink></li>
                            <li><NavLink to='/dashboard/manageItems'><FaList></FaList> Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/users'><FaUser></FaUser> All Users</NavLink></li>

                            <div className="divider"></div>
                            <li><NavLink to='/'><IoIosHome></IoIosHome>Home</NavLink></li>
                            <li><button onClick={handleSignOut}><RiLogoutCircleFill></RiLogoutCircleFill> Logout</button></li>

                        </>
                            :
                            <>
                                <li><NavLink to='/dashboard/userHome'><IoIosHome></IoIosHome> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory'><FaCalculator></FaCalculator> Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/cart'><FaCartPlus></FaCartPlus> My Cart  ({cart.length})</NavLink></li>
                                <li><NavLink to='/dashboard/reviews'><FaAddressBook></FaAddressBook> Add a Review</NavLink></li>

                                <div className="divider"></div>
                                <li><NavLink to='/'><IoIosHome></IoIosHome>Home</NavLink></li>
                                <li><button onClick={handleSignOut}><RiLogoutCircleFill></RiLogoutCircleFill> Logout</button></li>

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