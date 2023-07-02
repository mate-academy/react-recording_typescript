// #region imports
import React, { useState } from 'react';
import { OrderItem } from '../types/OrderItem';
import { getMaxId } from '../services/order';
import { OrderItemList } from './OrderItemList';
// #endregion
// #region Props
type Props = {
  name: string;
};
// #endregion

export const ShoppingCart: React.FC<Props> = ({ name }) => {
  const [code, setCode] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  // #region event handlers
  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(+event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (quantity <= 0 || !code) {
      return;
    }

    setOrderItems(items => {
      const id = 1 + getMaxId(items);
      const newItem = { id, code, quantity };

      return [...items, newItem];
    });

    setCode('');
    setQuantity(0);
  };
  // #endregion

  const filteredItems = orderItems.filter(() => true);

  return (
    <div className="box">
      <h2 className="title is-5 mb-2">{name}</h2>
      
      <form onSubmit={handleSubmit} noValidate className="mb-4">
        <input
          type="text"
          placeholder="Enter code"
          value={code}
          onChange={handleCodeChange}
        />

        <input 
          type="number" 
          min="1" 
          max="9" 
          value={quantity} 
          onChange={handleQuantityChange}
        />

        <button type="submit">Add</button>
      </form>

      <OrderItemList items={filteredItems} />
    </div>
  );
};
