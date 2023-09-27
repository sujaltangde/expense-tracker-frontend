import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const FinanceChart = ({balance,income,expense}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Balance', 'Expenses', 'Income'],
        datasets: [{
          data: [balance, expense, income], // Replace with actual data values
          backgroundColor: [
            '#36A2EB',
            '#FFCE56',
            '#4CAF50' 
          ]
        }]
      },
      options: {
        title: {
            display: true,
            text: 'Expense Tracker'
          },
          legend: {
            display: true,
            position: 'bottom'
          }
      }
    });
  }, []);

  return <canvas ref={chartRef} />;
};


