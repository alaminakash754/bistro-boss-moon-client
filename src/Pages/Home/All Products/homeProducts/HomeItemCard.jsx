

const HomeItemCard = ({item}) => {
    const {name, image, category } = item;
    return (
        <div>
            <div className="bg-white">
                <img className=" w-full h-[300px] rounded-t-md rounded-r-md" src={image} alt="" />
                <h1 className="text-center">{name}</h1>
                <h3 className="mt-3">Category: {category}</h3>
            </div>
        </div>
    );
};

export default HomeItemCard;