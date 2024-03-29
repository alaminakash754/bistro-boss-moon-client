import {  useLoaderData } from "react-router-dom";


const EachProductDetails = () => {
    const products = useLoaderData();
    console.log(products);
    const {name, title} = products;
    

    
    return (
        <div>
            <h2>Name: {name}</h2>
        </div>
    );
};

export default EachProductDetails;