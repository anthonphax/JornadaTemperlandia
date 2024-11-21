import React from 'react';

function OrderManager() {
  const order = {
    id: 1,
    status: 'Em produção',
    pieces: ['Peça A', 'Peça B'],
    deadline: '2024-10-01'
  };

  return (
    <div>
      <h2>Gerenciar Pedido {order.id}</h2>
      <p>Status: {order.status}</p>
      <p>Peças: {order.pieces.join(', ')}</p>
      <p>Prazo: {order.deadline}</p>
      <button>Editar Pedido</button>
    </div>
  );
}

export default OrderManager;
