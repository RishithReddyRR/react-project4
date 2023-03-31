import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
  function Home() {
    const dispatch=useDispatch()
    const {cartItems}=useSelector(state=>state.cart)
    function addToCartHandler(ob){
        dispatch({type:"addToCart",payload:ob})
        dispatch({type:"calculatePrice"})
        toast.success("Added to cart")
    }
    let ProductList=[
        {
            name:"mac book",
            id:1,
            price:14332312,
            imgSrc:img1
        },
        {
            name:"samsung a51",
            id:2,
            price:123221232423,
            imgSrc:img2
        }
    ]
  return (
    <div className="home">
        {
            ProductList.map(i=><ProductCard key={i.id} {...i} handler={addToCartHandler}  />)
            }
    </div>
  )
}
function ProductCard({name,id,price,handler,imgSrc}){
    return(
        <div className="productCard">
            <img src={imgSrc} alt="no no no"/>
            <h1>{name}</h1>
            <h4>${price}</h4>
            <button onClick={()=>handler({price,name,id,qty:1,imgSrc})}>Add To Cart</button>
        </div>
    )
}
export default Home