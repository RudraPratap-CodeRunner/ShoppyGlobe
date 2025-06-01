import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded shadow flex justify-between items-center">
      <div>
        <h2 className="font-bold">{item.title}</h2>
        <p>${item.price} x {item.quantity}</p>
      </div>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
