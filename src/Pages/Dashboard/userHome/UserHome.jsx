import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaArrowRight } from "react-icons/fa6";

const UserHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-3xl">
                    <span>Hi, Welcome  </span>
                    {
                        user?.displayName ? user.displayName : 'Back'
                    }
                </h2>
                <h1>
                    <img className="w-20 h-20 rounded-3xl mr-2" src={user.photoURL} />
                </h1>
            </div>
            <div className="mt-10 md:ml-36">
                <Link to='/dashboard/cart'>
                    <button className="w-3/4 bg-purple-100 text-lg text-purple-700 font-medium btn btn-outline border-0 border-t-4 border-b-4 mb-5 ">My Cart and Payment Details <FaArrowRight></FaArrowRight></button>
                </Link>
            </div>
        </div>
    );
};

export default UserHome;