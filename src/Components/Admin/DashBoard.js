import React from 'react'
import './DashBoard.css'

export default function DashBoard() {
  return (
    <div className='Dashboard-Container'>
      <div className='flexBox'><i className="fas fa-users mr-3"></i> Users<br/><br/>
      <p>Total users are :</p><strong>150</strong>
      </div>
      <div className='flexBox'><i className="fas fa-home mr-3"></i> Homes<br/><br/>
         <p>Total homes are :</p><strong>150</strong>
      </div>
    </div>
  )
}
