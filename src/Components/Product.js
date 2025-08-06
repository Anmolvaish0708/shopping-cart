import React, { useState } from 'react'

const Product = ({post}) => {
    console.log("post data:", post)

    const [selected,setSelected] = useState(false);
  return (
    <div>
        <div>
            <p>{post.title}</p>
        </div>

        <div>
            <p>{post.description}</p>
        </div>

        <div>
            <img src= {post.image}/>
        </div>

        <div>{post.price}</div>

        <button>
            {
                selected ? <p>Remove Item</p> : <p>Add to Cart</p>
            
            }
        </button>
    </div>
  )
}

export default Product;