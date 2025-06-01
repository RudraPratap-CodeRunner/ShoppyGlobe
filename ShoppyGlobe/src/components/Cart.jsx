import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold my-6 text-center text-blue-700">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-6 border-t pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xl font-semibold">
              Total: <span className="text-green-600">${total.toFixed(2)}</span>
            </p>
            <Link
              to="/checkout"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded w-full sm:w-auto text-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
