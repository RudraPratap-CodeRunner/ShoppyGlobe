import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react'; // Install via: npm install lucide-react

const Header = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <header className="bg-white shadow-md  fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Left: Logo */}
        <Link to="/" className="text-xl font-extrabold text-blue-600 whitespace-nowrap">
          ShoppyGlobe
        </Link>

        {/* Center: Home Link */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="text-gray-700 font-medium hover:text-blue-600 text-base">
            Home
          </Link>
        </div>

        {/* Right: Cart Icon */}
        <Link to="/cart" className="relative text-gray-700 hover:text-blue-600">
          <ShoppingCart className="w-6 h-6" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
