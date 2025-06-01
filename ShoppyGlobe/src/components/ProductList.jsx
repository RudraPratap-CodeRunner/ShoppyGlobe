import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';
import { useState } from 'react';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full p-2 mb-4 mt-16 border rounded"
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error loading products.</p>}
      <h1 className='text-center mt-4 text-2xl sm:text-5xl font-bold'>Our Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {filteredProducts.map(product => (
    <ProductItem key={product.id} product={product} />
  ))}
</div>

    </div>
  );
};

export default ProductList;
