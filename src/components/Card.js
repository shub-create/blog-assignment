import React from 'react'
import img1 from '../assets/img1.jpg'
import '../css/card.css'

import { useNavigate } from 'react-router-dom'

const Card = ({post}) => {
  
  const navigate = useNavigate();

  return (
    <div className='card' onClick={(e) => navigate(`/post/${post.id}`) } >
        <div className='img-container'>
            <img className="image" src={img1} />
        </div>
        <div className="card-body">
           <h4>
             {post.id}. {post.title}
           </h4>
           <p>
              {post.body.slice(0,50)}...
           </p>
        </div>
    </div>
  )
}

export default Card