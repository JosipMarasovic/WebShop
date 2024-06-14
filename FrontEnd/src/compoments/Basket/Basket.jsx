import React, { useContext } from 'react';
import holder from './holder.png';
import AppContext from '../../Context/AppContext';
import { Link } from 'react-router-dom';

function Basket() {
  const { 
      basket,
      addItemToBasket, 
      removeItemFromBasket,
      setBasket,
      updateItemInBasket,
      increaseQuantity,
      totalAmount
  } = useContext(AppContext);

  const removeItem = (productId) => {
    removeItemFromBasket(productId);
  };

  const clearBasket = () => {
    setBasket({});
  };

  return (
    <div className="container-fluid h-100 d-flex justify-content-center align-items-center pt-5 pb-5 mt-5 mb-5">
      {Object.keys(basket).length > 0 ? (
        <div style={{ border: '5px solid rgba(0, 0, 0, 0.473)', borderRadius: '15px', padding: '200px' }}>
          <div className="text-center">
            <h2 className='mb-5'><strong>Shopping Cart</strong></h2>
            {Object.values(basket).map((item, index) => (
              <div key={item.productId} className="item-container pt-3 pb-3">
                <img src={item.thumbnail} alt={item.title} style={{ width: '300px', height: '300px',  border: '2px solid black', objectFit: 'cover' , paddingTop:'30px'}} className='pb-5' />
                <p>Name of product : <strong>{item.title}</strong></p>
                <p>Price : <strong>{item.price}</strong></p>
                <p>Quantity : <strong>{item.quantity}</strong> </p>
                <p>Discount : <strong>{item.discountPercentage}</strong></p>
                <p>Discount amount : <strong>${((item.price * (item.discountPercentage / 100)) * item.quantity).toFixed(2)}</strong></p>
                <p>Price with discount : <strong>${(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)}</strong></p>
                <button className="btn custom-button mr-3" onClick={() => increaseQuantity(item.productId)}>Increase Quantity</button>
                <button className="btn custom-button ml-3" onClick={() => removeItem(item.productId)}>Remove Item</button>
              
                {index < Object.values(basket).length - 1 && <hr style={{ width: '100%', margin: 'auto', border: '2px solid ', marginTop: '10px', marginBottom: '10px' }} />}
              </div>
            ))}
            <hr style={{width: '100%', margin: 'auto', border: '2px solid '}} />
            <div className='mt-4'>
                 <strong>TOTAL AMOUNT : ${totalAmount} </strong>
                </div>
            <button className="mt-5 mb-3 btn custom-button w-100" onClick={clearBasket}>Clear Basket</button>
            <Link to="/payment-delivery" className="btn custom-button w-100">Proceed to payment</Link>
          </div>
        </div>
      ) : (
        <div style={{ border: '5px solid rgba(0, 0, 0, 0.473)', borderRadius: '15px', padding: '20px' }}>
          <div className="text-center">
            <h2>Shopping Cart</h2>
            <img src={holder} alt="Product" style={{ maxWidth: '100%', height: 'auto' }} className="pt-5 pb-5" />
            <h2 className="mt-3">Your shopping cart is empty, continue shopping.</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
