

const ToyCard = ({item}) => {
    const {name, image, category } = item;
    return (
        <div>
        <div className="bg-white space-y-3">
            <img className=" w-full h-[300px] rounded-t-md rounded-r-md" src={image} alt="" />
            <h1 className="text-center text-2xl font-bold">{name}</h1>
            <h3 className="mt-3 text-center text-base font-semibold pb-2">Category: {category}</h3>
        </div>
    </div>
    );
};

export default ToyCard;