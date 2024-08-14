// src/components/PieChart.js
import React from 'react';
import ApexCharts from 'react-apexcharts';

const PieChart = () => {
  const options = {
    chart: {
      type: 'pie',
      height: 350,
    },
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    title: {
      text: 'Pie Chart Example',
      align: 'left',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 320,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const series = [44, 55, 13, 43];

  return (
    <div>
      <ApexCharts options={options} series={series} type="pie" height={350} />
    </div>
  );
};

export default PieChart;
