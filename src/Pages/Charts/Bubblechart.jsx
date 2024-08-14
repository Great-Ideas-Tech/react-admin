// src/components/BubbleChart.js
import React from 'react';
import ApexCharts from 'react-apexcharts';

const BubbleChart = () => {
  const options = {
    chart: {
      type: 'bubble',
      height: 350,
    },
    title: {
      text: 'Bubble Chart Example',
      align: 'left',
    },
    xaxis: {
      tickAmount: 12,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
      title: {
        text: 'X Axis Title',
      },
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
      title: {
        text: 'Y Axis Title',
      },
    },
    fill: {
      type: 'gradient',
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'top',
    },
    grid: {
      borderColor: '#f1f1f1',
    },
  };

  const series = [
    {
      name: 'Series 1',
      data: [
        [10, 30, 10],
        [20, 50, 15],
        [30, 60, 25],
        [40, 70, 30],
        [50, 80, 35],
      ],
    },
    {
      name: 'Series 2',
      data: [
        [15, 25, 20],
        [25, 45, 25],
        [35, 55, 30],
        [45, 65, 35],
        [55, 75, 40],
      ],
    },
  ];

  return (
    <div>
      <ApexCharts options={options} series={series} type="bubble" height={350} />
    </div>
  );
};

export default BubbleChart;
