

import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../../Context/AppContext';
import { createCustomerAndAddToCart } from '../../apicalls/api';
import { useNavigate } from 'react-router-dom';

function PaymentDelivery() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const { basket, totalAmount, clearBasket } = useContext(AppContext);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    deliveryInstructions: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleOrder = async () => {
    if (!formData.name || !formData.lastName || !formData.email || !formData.address || !formData.city || !formData.country || !formData.zipCode || !selectedPaymentMethod) {
      setErrorMessage('Please fill in all the fields and select a payment method.');
      return;
    }
    
    const customerData = { ...formData };
    for (const productId in basket) {
      const product = basket[productId];
      await createCustomerAndAddToCart(customerData, parseInt(productId, 10), product.quantity);
    }
    clearBasket();
    navigate("/");
  };

  return (
    <div className="container pt-5 pb-5 mb-5 mt-5">
      <h1 className='text-center pt-5 pb-5'>Payment And Delivery</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center pb-3 pt-3">
          <h2 className='pt-3 pb-5'><strong>ITEMS :</strong></h2>
          {Object.values(basket).map((item, index) => (
            <div key={index} className="mb-3">
              <img src={item.thumbnail} alt={item.title} className="img-fluid" style={{ maxWidth: '300px', maxHeight: '300px', border: '2px solid black' }} />
              <p>Name of product : <strong>{item.title}</strong></p>
              <p>Quantity : <strong>{item.quantity}</strong> </p>
              {index !== Object.values(basket).length - 1 && <hr className="my-3" />}
            </div>
          ))}
          <h2><strong>Amount to pay : ${totalAmount}</strong></h2> 
        </div>
        <div className="col-md-6 text-center pb-3 pt-3 ">
          <h2 className='pt-3 pb-5'><strong>Input data and choose payment method:</strong></h2>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <h2 className='mt-3 mb-5'><strong>Customer data</strong></h2>
          <input type="text" placeholder="Name" className="form-control mb-3" name="name" value={formData.name} onChange={handleInputChange} />
          <input type="text" placeholder="Last Name" className="form-control mb-3" name="lastName" value={formData.lastName} onChange={handleInputChange} />
          <input type="email" placeholder="Email" className="form-control mb-3" name="email" value={formData.email} onChange={handleInputChange} />
          <input type="text" placeholder="Address" className="form-control mb-3" name="address" value={formData.address} onChange={handleInputChange} />
          <input type="text" placeholder="City" className="form-control mb-3" name="city" value={formData.city} onChange={handleInputChange} />
          <input type="text" placeholder="Country" className="form-control mb-3" name="country" value={formData.country} onChange={handleInputChange} />
          <input type="text" placeholder="Zip Code" className="form-control mb-3" name="zipCode" value={formData.zipCode} onChange={handleInputChange} />
          <textarea placeholder="Delivery Instructions" className="form-control mb-3" name="deliveryInstructions" value={formData.deliveryInstructions} onChange={handleInputChange}></textarea>
          <h2 className='mt-5'><strong>Choose payment method :</strong></h2>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="cash" name="paymentMethod" value="cash" checked={selectedPaymentMethod === 'cash'} onChange={handlePaymentMethodChange} />
            <label className="form-check-label" htmlFor="cash">Cash</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="creditcard" name="paymentMethod" value="creditcard" checked={selectedPaymentMethod === 'creditcard'} onChange={handlePaymentMethodChange} />
            <label className="form-check-label" htmlFor="creditcard">Credit Card</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="paypal" name="paymentMethod" value="paypal" checked={selectedPaymentMethod === 'paypal'} onChange={handlePaymentMethodChange} />
            <label className="form-check-label" htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <button className="btn custom-button text-center mt-5 mb-5 pt-3 pb-3" onClick={handleOrder}>ORDER</button>
      </div>
    </div>
  );
}

export default PaymentDelivery;
