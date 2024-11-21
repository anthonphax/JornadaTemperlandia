import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registrar as escalas e elementos necessários
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function LossGraphs() {
  const data = {
    labels: ['Máquina A', 'Máquina B', 'Máquina C'],
    datasets: [{
      label: 'Peças não conformes',
      data: [5, 8, 2],
      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
    }]
  };

  return (
    <div>
      <h2>Gráficos de Perdas</h2>
      <Bar data={data} />
    </div>
  );
}

export default LossGraphs;
