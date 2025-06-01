import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    alert('✅ Order placed successfully!');
    navigate('/');
  };

  if (cartItems.length === 0) {
    return <p className="text-center mt-8 text-gray-600">Your cart is empty. Add items before checking out.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <ul className="divide-y mb-4">
        {cartItems.map((item) => (
          <li key={item.id} className="py-3 flex justify-between">
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-between font-bold text-lg mb-4">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
