import React from 'react'
import './DiscriptionBox.css'
const DiscriptionBox = () => {
  return (
    <div className='discriptionbox'>
        <div className="discriptionbox-navigator">
            <div className="discriptionbox-nav-box">Description</div>
            <div className="discriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-discription">
            <p>paragraph</p>
            <p>
            some text
            </p>
        </div>
    </div>
  )
}

export default DiscriptionBox