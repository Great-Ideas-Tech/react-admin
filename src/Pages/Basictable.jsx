import React from 'react'

const Basictable = () => {
  return (
<div className="container">
  <div className="page-inner">
    <div className="page-header">
      <h3 className="fw-bold mb-3">Tables</h3>
      <ul className="breadcrumbs mb-3">
        <li className="nav-home">
          <a href="#">
            <i className="icon-home" />
          </a>
        </li>
        <li className="separator">
          <i className="icon-arrow-right" />
        </li>
        <li className="nav-item">
          <a href="#">Tables</a>
        </li>
        <li className="separator">
          <i className="icon-arrow-right" />
        </li>
        <li className="nav-item">
          <a href="#">Basic Tables</a>
        </li>
      </ul>
    </div>
    <div className="row">
      <div className="col-md-6">
      <div className="card bg-white shadow rounded-lg overflow-hidden">
  <div className="card-header bg-gray-100 p-4 border-b">
    <div className="card-title text-lg font-semibold">Basic Table</div>
  </div>
  <div className="card-body p-4">
    <div className="card-sub text-sm text-gray-600 mb-4">
      This is the basic table view of the ready dashboard :
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Handle</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mark</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Otto</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">@mdo</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jacob</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Thornton</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">@fat</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
            <td colSpan={2} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Larry the Bird</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<div className="card bg-white shadow rounded-lg overflow-hidden">
  <div className="card-header bg-gray-100 p-4 border-b">
    <div className="card-title text-lg font-semibold">Striped Rows</div>
  </div>
  <div className="card-body p-4">
    <div className="card-sub text-sm text-gray-600 mb-4">
      Add
      <code className="bg-gray-100 text-gray-800 p-1 rounded">.table-striped</code>
      to rows for the striped table
    </div>

    {/* <!-- First Table --> */}
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Handle</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mark</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Otto</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">@mdo</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jacob</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Thornton</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">@fat</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
            <td colSpan={2} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Larry the Bird</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* <!-- Second Table with Black Background --> */}
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Handle</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="bg-black text-white">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">1</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">Mark</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">Otto</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">@mdo</td>
          </tr>
          <tr className="bg-gray-800 text-white">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">2</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">Jacob</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">Thornton</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">@fat</td>
          </tr>
          <tr className="bg-gray-700 text-white">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">3</td>
            <td colSpan={2} className="px-6 py-4 whitespace-nowrap text-sm">Larry the Bird</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* <!-- Third Table with Danger Background --> */}
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Handle</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="bg-red-100 text-red-800">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">1</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">Mark</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">Otto</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">@mdo</td>
          </tr>
          <tr className="bg-red-200 text-red-800">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">2</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">Jacob</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">Thornton</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">@fat</td>
          </tr>
          <tr className="bg-red-300 text-red-800">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">3</td>
            <td colSpan={2} className="px-6 py-4 whitespace-nowrap text-sm">Larry the Bird</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<div className="card bg-white shadow rounded-lg overflow-hidden">
  <div className="card-header bg-gray-100 p-4 border-b">
    <div className="card-title text-lg font-semibold">Responsive Table</div>
  </div>
  <div className="card-body p-4">
    <div className="card-sub text-sm text-gray-600 mb-4">
      Create responsive tables by wrapping any table with
      <code className="bg-gray-100 text-gray-800 p-1 rounded">.overflow-x-auto</code>
      to make them scroll horizontally on small devices.
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Table heading</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Table heading</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Table heading</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Table heading</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Table heading</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Table heading</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <th scope="row" className="px-6 py-4 text-sm font-medium text-gray-900">1</th>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
          </tr>
          <tr>
            <th scope="row" className="px-6 py-4 text-sm font-medium text-gray-900">2</th>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
          </tr>
          <tr>
            <th scope="row" className="px-6 py-4 text-sm font-medium text-gray-900">3</th>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
            <td className="px-6 py-4 text-sm text-gray-500">Table cell</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


      </div>

      <div className="col-md-6">

      <div className="card bg-white shadow rounded-lg overflow-hidden">
  <div className="card-header bg-gray-100 p-4 border-b">
    <div className="card-title text-lg font-semibold">Hoverable Table</div>
  </div>
  <div className="card-body p-4">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Handle</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">1</td>
            <td className="px-6 py-4 text-sm text-gray-500">Mark</td>
            <td className="px-6 py-4 text-sm text-gray-500">Otto</td>
            <td className="px-6 py-4 text-sm text-gray-500">@mdo</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">2</td>
            <td className="px-6 py-4 text-sm text-gray-500">Jacob</td>
            <td className="px-6 py-4 text-sm text-gray-500">Thornton</td>
            <td className="px-6 py-4 text-sm text-gray-500">@fat</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">3</td>
            <td colSpan={2} className="px-6 py-4 text-sm text-gray-500">Larry the Bird</td>
            <td className="px-6 py-4 text-sm text-gray-500">@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


<div className="card bg-white shadow rounded-lg overflow-hidden">
  <div className="card-header bg-gray-100 p-4 border-b">
    <div className="card-title text-lg font-semibold">Bordered Table</div>
  </div>
  <div className="card-body p-4">
    <div className="card-sub text-sm text-gray-600 mb-4">
      Add
      <code className="bg-gray-100 text-gray-800 p-1 rounded">.border</code>
      to create a bordered table.
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">First</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">Last</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">Handle</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-300">1</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">Mark</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">Otto</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">@mdo</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-300">2</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">Jacob</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">Thornton</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">@fat</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-300">3</td>
            <td colSpan={2} className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">Larry the Bird</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="card-sub text-sm text-gray-600 mt-4">
      You can also add
      <code className="bg-gray-100 text-gray-800 p-1 rounded">
        {/* .border-{color} */}
      </code>
      to change the border color of the table.
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full divide-y divide-gray-300 border border-yellow-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-yellow-300">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-yellow-300">First</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-yellow-300">Last</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-yellow-300">Handle</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-yellow-300">1</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-yellow-300">Mark</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-yellow-300">Otto</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-yellow-300">@mdo</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-yellow-300">2</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-yellow-300">Jacob</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-yellow-300">Thornton</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-yellow-300">@fat</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-yellow-300">3</td>
            <td colSpan={2} className="px-6 py-4 text-sm text-gray-500 border-b border-yellow-300">Larry the Bird</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-yellow-300">@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="card-sub text-sm text-gray-600 mt-4">
      It can also add
      <code className="bg-gray-100 text-gray-800 p-1 rounded">
        {/* .bg-{color} */}
      </code>
      so that the table header has the same color as the border color of the table.
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full divide-y divide-gray-300 border border-blue-500">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b border-blue-500">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b border-blue-500">First</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b border-blue-500">Last</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b border-blue-500">Handle</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-blue-500">1</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-blue-500">Mark</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-blue-500">Otto</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-blue-500">@mdo</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-blue-500">2</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-blue-500">Jacob</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-blue-500">Thornton</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-blue-500">@fat</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-blue-500">3</td>
            <td colSpan={2} className="px-6 py-4 text-sm text-gray-500 border-b border-blue-500">Larry the Bird</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-blue-500">@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


<div className="card bg-white shadow rounded-lg overflow-hidden">
  <div className="card-header bg-gray-100 p-4 border-b">
    <div className="card-title text-lg font-semibold">Table Head States</div>
  </div>
  <div className="card-body p-4">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b border-green-500">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b border-green-500">First</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b border-green-500">Last</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b border-green-500">Handle</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-300">1</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">Mark</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">Otto</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">@mdo</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-300">2</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">Jacob</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">Thornton</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">@fat</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-300">3</td>
            <td colSpan={2} className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">Larry the Bird</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b border-blue-500">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b border-blue-500">First</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b border-blue-500">Last</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b border-blue-500">Handle</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-300">1</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">Mark</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">Otto</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">@mdo</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-300">2</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">Jacob</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">Thornton</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">@fat</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-300">3</td>
            <td colSpan={2} className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">Larry the Bird</td>
            <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-300">@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

      </div>
    </div>
  </div>
</div>
  )
}

export default Basictable
