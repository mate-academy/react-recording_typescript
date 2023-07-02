import { useState } from 'react';
import { ShoppingCart } from './components/ShoppingCart';

export const App = () => {
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(true);

  return (
    <div className="section pt-2">
      {false && (
        <div className="box is-flex is-justify-content-space-between">
          {visible ? (
            <button onClick={() => setVisible(false)}>Hide</button>
          ) : (
            <button onClick={() => setVisible(true)}>Show</button>
          )}

          <input
            type="search"
            placeholder="Filter by code"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
        </div>
      )}

      {visible && (
        <ShoppingCart name="Shopping Cart" />
      )}
    </div>
  )
};