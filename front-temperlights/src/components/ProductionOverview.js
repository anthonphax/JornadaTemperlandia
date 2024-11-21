import React from 'react';

function ProductionOverview() {
  const orders = [
    { id: 1, status: 'Em produção' },
    { id: 2, status: 'Concluído' },
    { id: 3, status: 'Atrasado' }
  ];

  return (
    <div>
      <h2>Visão Geral da Produção</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Pedido {order.id} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductionOverview;
