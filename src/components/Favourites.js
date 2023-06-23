import React, { useEffect ,useState} from 'react'
import '../css/favourites.css'
import GridLayout from './Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Favourites = () => {

  const [posts,setPosts] = useState();
  const navigate = useNavigate();

  useEffect(()=>{

    const fav = JSON.parse(localStorage.getItem('fav'));
    if(fav != null){
      setPosts(fav);
      console.log(fav);
    }
    
  },[]);

  return (
    <div className='fav-main'>
        <div className='fav-head'>
        <h2>
            Your Favourite Blogs 
        </h2>
        </div>
        <div className='fav-body'>
            {
                posts?.length > 0 ? <GridLayout item={posts} /> : <>
                <h3 style={{fontSize: "20px"}}>
                    You dont have any favourite blog.
                </h3>
                </>
            }
            

        </div>
    </div>
  )
}

export default Favourites