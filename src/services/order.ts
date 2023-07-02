import { OrderItem } from '../types/OrderItem';

export function getMaxId(items: OrderItem[]) {
  return Math.max(0, ...items.map(item => item.id));
}

