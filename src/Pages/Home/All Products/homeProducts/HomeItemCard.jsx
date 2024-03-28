

const HomeItemCard = ({item}) => {
    const {name, image, category } = item;
    return (
        <div>
            <div className="bg-white">
                <img className="p-2" src={image} alt="" />
                <h1 className="text-center">{name}</h1>
                <h3 className="mt-3">Category: {category}</h3>
            </div>
        </div>
    );
};

export default HomeItemCard;