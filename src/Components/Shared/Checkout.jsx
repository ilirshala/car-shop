import React from "react";
import "../../Styles/Shared/Checkout.scss";
import BlackNavbar from "../Shared/BlackNavbar";
import CartProduct from "./CartProduct";
import { useStateValue } from "../../Redux/StateProvider";
import { getBasketTotal } from "../../Redux/reducer";
import CurrencyFormat from "react-currency-format";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <>
      <div className='checkout'>
        <div className='checkout__things'>
          <div className='checkout__img'>
            <h3>Image</h3>
          </div>
          <div className='checkout__others'>
            <h3>Name</h3>
          </div>
          <div className='checkout__others'>
            <h3>Price</h3>
          </div>
          <div className='checkout__others'>
            <h3>Delete</h3>
          </div>
        </div>
        <hr />
        {basket?.length === 0 ? (
          <div>
            <h2 style={{ textAlign: "center", color: "white" }}>
              Your Shopping Basket is empty
            </h2>
          </div>
        ) : (
          <div>
            {basket?.map((item, key) => (
              <CartProduct
                key={key}
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        )}
        <div className='checkoutPrice'>
          <div>
            <CurrencyFormat
              renderText={value => (
                <>
                  <h3>
                    Subtotal: <p>{value}</p>
                  </h3>
                  <h3>
                    Item in cart: <p>{basket?.length}</p>
                  </h3>
                  <h3>
                    Total: <p>{value}</p>
                  </h3>
                </>
              )}
              decimalScale={5}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeperator={true}
              prefix={"$"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
