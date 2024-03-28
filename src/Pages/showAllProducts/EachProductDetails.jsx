import {  useLoaderData, useParams } from "react-router-dom";


const EachProductDetails = () => {
    const products = useLoaderData();
    // console.log(products);
    const {id} = useParams();
    const product = products.find(product => product.id == id);
    console.log(product)
    
    return (
        <div>
            <h2>{product?.name}</h2>
        </div>
    );
};

export default EachProductDetails;