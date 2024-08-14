import React from 'react'
import LineChart from './Spark/Linechart'
import BarChart from './Spark/Barchart'
import BubbleChart from './Spark/Bubblechart'
import RadarChart from './Spark/Radarchart'
import PieChart from './Spark/Piechart'


const Sparkline = () => {
  return (
    <div className="container">
    <div className="page-inner">
      <h3 className="fw-bold mb-3">jQuery Sparkline</h3>
      <div className="page-category pe-md-5">
        This jQuery plugin generates sparklines (small inline charts) directly in
        the browser using data supplied either inline in the HTML, or via
        javascript. Please checkout their
        <a href="https://omnipotent.net/jquery.sparkline/#s-docs" target="_blank">
          full documentation
        </a>
        .
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Line Chart</div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-center p-3">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Bar Chart</div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-center p-3">
                <BarChart/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Bubble Chart</div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-center p-3">
            <BubbleChart/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Radar Chart</div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-center p-3">
                <RadarChart />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Pie Chart</div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-center p-3">
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Sparkline
