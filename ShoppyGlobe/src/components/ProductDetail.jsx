import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => setError(err));
  }, [id]);

  if (error) return <p className="p-4">Error loading product.</p>;
  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <img src={product.thumbnail} alt={product.title} className="w-full max-w-md mx-auto" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="text-blue-600 mt-2 text-xl">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
