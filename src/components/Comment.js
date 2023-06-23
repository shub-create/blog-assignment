import React from 'react'
import '../css/comment.css'
import img1 from '../assets/img1.jpg'

const Comment = (props) => {
  return (
    <>
    <div className="comment-body">
        <img src={img1} />
        <div className='comment-main'>
            <h4>
              {props?.comment?.name}
            </h4>
            <p>
              {props?.comment?.body}
            </p>
            
        </div>
    </div>
    </>
  )
}

export default Comment