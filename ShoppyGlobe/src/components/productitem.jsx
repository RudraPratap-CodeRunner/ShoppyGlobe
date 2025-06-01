import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-blue-50 rounded-xl mt-16 shadow-sm hover:shadow-md transition-shadow duration-200 p-3 space-y-3 flex flex-col justify-between min-h-[350px]">
      
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="rounded-lg w-full h-40 object-cover mb-2"
        />
        <div>
          <h2 className="text-base font-semibold text-gray-800 line-clamp-1">{product.title}</h2>
          <p className="text-blue-700 font-bold mt-1">${product.price}</p>
        </div>
      </Link>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="w-full mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
