import React, { useState,useEffect } from 'react'
import img1 from '../assets/img1.jpg'
import '../css/postDetail.css'

import { useParams , useNavigate, json } from 'react-router-dom';
import Spinner from './Spinner';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Comment from './Comment';
import SnackbarCustom from './Snackbar';

const PostDetail = () => {
   
  let {id} = useParams();

  const navigate = useNavigate();

  const [error,setError] = useState(false);

  const [loading,setLoading] = useState(false);

  const [postDetail,setPostDetail] = useState(null);

  const [author,setAuthor] = useState();

  const [comments,setComments] = useState();

  const [favText,setFavText] = useState('Add to Favourites')

  const [inputText, setInputText] = useState();

  const [state,setState] = useState(false);

  const [message,setMessage] = useState();

  const handleClose = () => {
    setState(false);
  };

  useEffect(() => {

    const fav = JSON.parse(localStorage.getItem('fav'));
    if(fav != null){
      let findId = fav.find(item => item.id == id);
      if(findId){
        setFavText('Remove from Favourites');
      }
    }


    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    console.log(id)
   
    setLoading(true);

    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    
    fetch(url).then(response => response.json())
     .then(json => {
        setPostDetail(json);
        setLoading(false);
        
     }).catch(err => {
      setLoading(false);
      setError(true);
     })

     const userUrl = `https://jsonplaceholder.typicode.com/users/${id%9}`;

     fetch(userUrl).then(resp=> resp.json()).then(res => {
          setAuthor(res);
          setLoading(false);
        }).catch(err => {
          setLoading(false);
          setError(true);

      });

      const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;

      fetch(commentUrl).then(resp=> resp.json()).then(res => {
           setComments(res);
           const existingComment = JSON.parse(localStorage.getItem(`${id}`));
           if(existingComment != null) {
             setComments(prev => [...existingComment,...prev]);
             console.log(comments);
           }
           setLoading(false);
         }).catch(err => {
          setLoading(false);
          setError(true);
       })

      
     

  },[id]);

  const handleSubmit = () => {
    if(inputText.length) {
      setComments(prev => [{name:"anonymous",body: inputText},...prev]);
      const arr = JSON.parse(localStorage.getItem(`${id}`)) || [];
      arr.push({name:"anonymous",body: inputText});
      localStorage.setItem(`${id}`, JSON.stringify(arr));
      setInputText('');
    } 
  }

  const handleFav = () => {
    const favArr = JSON.parse(localStorage.getItem('fav')) || [];
    if(favArr == null){
      const object = {
        id: id,
        title: postDetail?.title,
        body: postDetail?.body
      }
      favArr.push(object);
      localStorage.setItem('fav',JSON.stringify(favArr));
      setFavText('Remove from Favourites');
      setMessage('Successfully added to favourite')
      setState(true);
      

    }

    else {
      let findId = favArr.find(item => item.id == id);
      if(findId){
        let updatedArr = favArr.filter( obj => obj.id != id);
        localStorage.setItem('fav',JSON.stringify(updatedArr));
        setFavText('Add to Favourites')
        setMessage('Successfully removed from favourite')
        setState(true);
        
      }
      else {
        const object = {
          id: id,
          title: postDetail?.title,
          body: postDetail?.body
        }
        favArr.push(object);
        localStorage.setItem('fav',JSON.stringify(favArr));
        setFavText('Remove from Favourites');
        setMessage('Successfully added to favourite')
        setState(true);
        
      }
    }
    
  }

  if(loading) return <Spinner />
   

  return (
    <div className='post-page'>
        {
          !error ? <>
             
             <SnackbarCustom message={message} severity="success" state={state} handleClose={handleClose} />
        <div className='post-menu'>
          <div className='post-menu-back' onClick={(e) => navigate('/') }>
            <ArrowBackIcon style={{marginRight: "10px"}} />
            <p>Back</p>
          </div>
          <div className='post-menu-fav' onClick={handleFav}> 
            <p>{favText}</p>
            <FavoriteBorderIcon style={{marginLeft: "10px", color: favText == "Remove from Favourites" ? "red" : "#00337C"  }}/>
          </div>
        </div>
        <div className='post-body'>
          <div className='post-title'>
            <h2>
              {postDetail?.title}
            </h2>
            <p>
              June 23, 2023
            </p>
          </div>
          <div className='post-img'>
            <img src={img1} />
          </div>
          <p className='post-body-p'>
            {postDetail?.body}
            {postDetail?.body}
            {postDetail?.body}
            {postDetail?.body}
            {postDetail?.body}
            {postDetail?.body}
            {postDetail?.body}
            {postDetail?.body}
          </p>
          <div className='post-author'>
            <h3>
              Author
            </h3>
            <div className='post-author-body'>
              <img className='post-author-img' src={img1} />
               <h4>
                {author?.name}
              </h4>
            </div>
          </div>
          <div className='post-comment'>
            <h3>
              Comments
            </h3>
            <div className='post-comment-input'>
              <img className='post-author-img' src={img1} />
              <input placeholder='Type your message here' value={inputText} onChange={(e) => setInputText(e.target.value)} />
              <button className="btn btn-primary" style={{backgroundColor: "#00337C"}} onClick={handleSubmit}>Send</button>
            </div>
            <div className='post-comment-body'>
               {
                comments?.map((comment) => (
                  <Comment comment={comment} />
                ))
            
              }
              
            </div>

          </div>
        </div>


          </> :
          <h2 style={{textAlign: "center",marginTop: "30vh"}}> Something went wrong!</h2>
        }
        
        
    </div>
  )
}

export default PostDetail