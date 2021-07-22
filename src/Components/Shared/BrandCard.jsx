import React from "react";
import "../../Styles/Shared/BrandCard.scss";
import { useStateValue } from "../../Redux/StateProvider";

function BrandCard({ id, img, title, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //Add Item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
      },
    });
  };
  return (
    <div className='brandCard' id={id}>
      <img src={img} alt='' />
      <h3>{title}</h3>
      <h3>${price}</h3>
      <button onClick={addToBasket}>Add To Cart</button>
    </div>
  );
}

export default BrandCard;
