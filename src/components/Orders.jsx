import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearOrder, clearOrders } from '../Slices/orderSlice'; // Import actions to clear orders

function Orders() {
  const dispatch = useDispatch(); // Initialize the dispatch function
  const orders = useSelector((state) => state.order.items); // Access orders from the Redux store
  console.log(orders);

  const handleClearOrder = (orderId) => {
    dispatch(clearOrder(orderId)); // Dispatch the action to remove the order
  };

  const handleclearAll = () => {
    if (window.confirm('Are you sure you want to clear all orders?')) {
      dispatch(clearOrders()); // Dispatch action to clear all orders from Redux
      localStorage.removeItem('orders'); // Clear orders from local storage
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Orders</h2>
      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order, index) => (
            <div key={index} className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Order #{index + 1}</h3>
                <h3>Name: {order.name}</h3>
                {order.imageUrl && (
                  <img src={order.imageUrl}  className="w-16 h-auto rounded" />
                )}
                <p className="text-md">User: {order?.displayName ?? 'N/A'}</p>
                <p className="text-md">Email: {order?.email ?? 'N/A'}</p>
                <div className="mt-2">
                  <h4 className="font-semibold">Items:</h4>
                  {/* Add your items display logic here */}
                </div>
              </div>
              <button
                className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
                onClick={() => handleClearOrder(order.id)} // Pass the order id to remove it
              >
                Clear Order
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders placed yet.</p>
      )}
      <button
        onClick={handleclearAll}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
      >
        Clear All Orders
      </button>
    </div>
  );
}

export default Orders;
