import React from 'react'
import { Link } from 'react-router-dom'
import Worldmap from './DashboardComponent/Worldmap'

const Jsvectormap = () => {
  return (
    <div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="card card-transparent">
        <div className="card-header">
          <h4 className="card-title text-center">Vector Maps</h4>
          <p className="card-category text-center">
            We use the
            
            <Worldmap/>
            plugin to create vector maps.
          </p>
        </div>
        <div className="card-body">
          <div className="col-md-10 ms-auto me-auto">
            <div className="mapcontainer">
              <div id="world-map" className="w-100" style={{ height: 550 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Jsvectormap
