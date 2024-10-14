import React from 'react';

function Order({ order, clearOrder }) {
  const totalAmount = order.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div>
      <h2>Your Order Summary</h2>
      {order.length > 0 ? (
        <ul>
          {order.map(item => (
            <li key={item.id}>
              {item.name} x {item.quantity} = ${item.quantity * item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in the order</p>
      )}
      <h3>Total Amount: ${totalAmount}</h3>
      <button onClick={clearOrder}>Cancel Order</button>
    </div>
  );
}

export default Order;
