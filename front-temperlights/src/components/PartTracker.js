import React from 'react';

function PartTracker() {
  const partHistory = [
    { date: '2024-09-28', action: 'Iniciada Produção' },
    { date: '2024-09-29', action: 'Parada por tempo ocioso' }
  ];

  return (
    <div>
      <h2>Rastrear Peça</h2>
      <ul>
        {partHistory.map((log, index) => (
          <li key={index}>{log.date} - {log.action}</li>
        ))}
      </ul>
    </div>
  );
}

export default PartTracker;
