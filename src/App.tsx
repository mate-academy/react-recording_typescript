import { ShoppingCart } from './components/ShoppingCart';
import { ShoppingCart2 } from './components/ShoppingCart2';

export const App = () => (
  <div className="section">
    <ShoppingCart name="Shopping Cart" />
    <ShoppingCart2 name="Shopping Cart 2" />
  </div>
)