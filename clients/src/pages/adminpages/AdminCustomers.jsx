import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import "./Customer.css"

const AdminCustomers = () => {

  const { allUsers } = useContext(AppContext);

  return (
    <div className='customer-bg'>
      <h3><b>User List</b></h3>
      <div className='customer-table'>
        <div className='customer-items'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
          </table>
        </div>
        <p className="cus-empty">No User Found</p>
      </div>
    </div>
  )
}

export default AdminCustomers