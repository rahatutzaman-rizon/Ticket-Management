import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ chartColor }) => {
  const data = {
    labels: ['', '', '', '', '', '', ''], // Blank labels to create a simple line
    datasets: [
      {
        data: [3, 2, 3, 2.5, 3, 2.8, 3], // Create a wave-like data pattern
        borderColor: chartColor,
        backgroundColor: chartColor,
        fill: false,
        tension: 0.4, // Smooth line
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false, // Hide X axis
      },
      y: {
        display: false, // Hide Y axis
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    elements: {
      point: {
        radius: 0, // Hide data points
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
