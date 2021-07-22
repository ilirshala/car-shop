import React, { useEffect } from "react";
import "../../Styles/Shared/CartProduct.scss";
import { RiDeleteBin4Line } from "react-icons/ri";
import { useStateValue } from "../../Redux/StateProvider";

function CartProduct({ id, img, title, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
      },
    });
  };
  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <div className='cartProduct' id={id}>
      <div className='cartProduct__img'>
        <img src={img} alt='' />
      </div>
      <div className='cartProduct__others'>
        <h3>{title}</h3>
      </div>
      <div className='cartProduct__others'>
        <h3>${price}</h3>
      </div>
      <div className='cartProduct__others'>
        <h3>
          <RiDeleteBin4Line onClick={removeFromBasket} />
        </h3>
      </div>
    </div>
  );
}

export default CartProduct;
