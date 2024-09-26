import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, addItemToCart, clearCartItems } from '../Slices/CartSlices'; // Import the necessary actions
import { addOrder } from '../Slices/orderSlice';
import { auth } from '../../firebaseconfig'; // Ensure you have the correct path to your Firebase config

function Carts() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Access the cart items from the Redux store
  const [orderStatus, setOrderStatus] = useState('');

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      savedCartItems.forEach((item) => {
        dispatch(addItemToCart(item)); // Add each saved item to the Redux store
      });
    }
  }, [dispatch]);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId)); // Dispatch the action to remove the item
  };

  const handleOrder = () => {
    setOrderStatus('Processing...'); // Indicate that the order is being processed
    const currentUser = auth.currentUser; // Get the current user from Firebase
    const email = currentUser ? currentUser.email : null;
    const displayName = currentUser ? currentUser.displayName : null;

    // Prepare order details
    const orderItems = cartItems.map(item => ({
      id: item.id, // Include the item id
      name: item.name, // Include the item name
      price: item.price, // Include the item price
      // quantity: item.quantity, // Include the quantity
      email, // Add user email
      displayName, 
      imageUrl: item.imageUrl // Add user displayName
    }));

    // Dispatch order with user credentials
    orderItems.forEach(orderItem => {
      dispatch(addOrder(orderItem));
    });

    dispatch(clearCartItems()); // Clear the cart items after ordering
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <div className="grid grid-cols-3 gap-5">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-md">Price: ${item.price}</p>
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-auto max-h-24 object-cover rounded-lg"
                    />
                  )}
                </div>
                <p className="text-md">Quantity: {item.quantity}</p>
                <button
                  className="mt-2 px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700 transition duration-200"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          {/* Order button */}
          <div className="flex justify-center mt-8">
            <button
              className="mt-4 bg-blue-600 text-white h-10 w-32 rounded-lg hover:bg-blue-700"
              onClick={handleOrder}
            >
              {orderStatus || 'Order'}
            </button>
          </div>
        </>
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
}

export default Carts;
