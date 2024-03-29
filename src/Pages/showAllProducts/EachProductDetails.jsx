import axios from "axios";
import { useEffect } from "react";
import {  useLoaderData, useParams } from "react-router-dom";


const EachProductDetails = () => {

    const products = useLoaderData();
    // const {id} = useParams();
    // console.log(id);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:5000/products/${id}`);
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error('Error fetching product details:', error);
    //         }
    //     };
    
    //     fetchData();
    // }, [id]);
    // console.log(products);
    const {name, title} = products;
    

    
    return (
        <div>
            <h2>Name:{name}</h2>
        </div>
    );
};

export default EachProductDetails;