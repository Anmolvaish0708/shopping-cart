import React, { useEffect, useState } from 'react'
import Product from '../Components/Product';
import Spinner from '../Components/Spinner';

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);

        try{
          const res = await fetch(API_URL);
          const data = await res.json();
          console.log("printing the product data")
          console.log(data)
          setPosts(data);
        }
        catch(error){
           console.log("error occured" , error);
           setPosts([]);
        }

        setLoading(false);
    }

    useEffect( () => {
        fetchProductData();

    },[])

    

  return (
    <div>
        {
            loading? (<Spinner/>) : 
                posts.length > 0 ? (
                    <div> 
                        {
                            posts.map( (post) => (
                                <Product key={post.id} post = {post}/>
                            ) )
                        }
                    </div>
                ) :(
                    <div>
                        NO Data Found
                    </div>    
                )
              
            
        }
    </div>
  )
}

export default Home