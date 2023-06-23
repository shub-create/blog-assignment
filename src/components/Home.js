import React, { useEffect,useState } from 'react'
import '../css/home.css'

import{IoMdSearch} from 'react-icons/io'
import Pagination from './Pagination'
import Spinner from './Spinner'
import Card from './Card'

import useDebounce from './useDebounce';
import GridLayout from './Grid'



const Home = () => {

  const [searchTerm, setSearchTerm] = useState('');  

  const [error,setError] = useState(false);
  
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);

  const [postsPerPage, setPostsPerPage] = useState(8);
  const [pagination, setPagination] = useState({
    start: 0,
    end: postsPerPage,
  });

  const debouncedSearch = useDebounce(searchTerm,500);



  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  useEffect(() => {
     setLoading(true);
     
     const url = "https://jsonplaceholder.typicode.com/posts";

     fetch(url).then(response => response.json())
     .then(json => {
        setPosts(json);
        setLoading(false);
     }).catch((err) => {
      setLoading(false);
      setError(true);
     })

  },[])

  useEffect(() => {

    
    setLoading(true);


    if(posts && debouncedSearch) {

       

    const url = "https://jsonplaceholder.typicode.com/posts";

     fetch(url).then(response => response.json())
     .then(json => {
       
        var searchedPost =  json.filter((post) => {return post.title.toLowerCase().includes(debouncedSearch.toLowerCase())});
       
        setPosts(searchedPost);
        setLoading(false);
     }).catch((err) => {
      setLoading(false);
      setError(true);
     })

     
        
    
     
 
       
    }

    if(debouncedSearch.length == 0){
        const url = "https://jsonplaceholder.typicode.com/posts";

     fetch(url).then(response => response.json())
     .then(json => {
        setPosts(json);
        setLoading(false);
     }).catch(err => {
      setLoading(false);
      setError(true);
     })


    }

  },[debouncedSearch]);
 
  if(loading) return <Spinner />

  return (

       
    <div className='home'>
            

            {
              error ? <h2> Something went wrong!</h2> : 
              <>
              <div class="search">
                <input type="text" 
                class="searchTerm" 
                placeholder="What are you looking for?" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" class="searchButton">
                    <IoMdSearch fontSize={25}/>
                </button>
              </div>
              <div className="row">
                  <h2 style={{marginBottom: "35px" ,textAlign: "center"}}>
                    Latest Blogs
                  </h2>
                  {
                  posts.length > 0 ? 
                      <>
                          
                          <GridLayout item={posts.slice(pagination.start,pagination.end)} />
                          
                          <Pagination
                            postsPerPage={postsPerPage}
                            onPaginationChange={onPaginationChange}
                            total={posts.length}
                          /> 
                      </>
                      : (
                      <div style={{ display: "flex", justifyContent: "center", fontSize: "25px" ,height:"75vh"}}> No posts found 😶 </div>
                    )
                    }
              </div>
              </>
            }

        
        


    </div>

  )
}

export default Home