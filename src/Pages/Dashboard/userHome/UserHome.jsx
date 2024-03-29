import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth()
    return (
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
    );
};

export default UserHome;