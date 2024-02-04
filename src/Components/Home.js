import React, { useEffect, useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import image from '../images/image.svg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
let navigate = useNavigate();

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        console.log(data);
      }
      )
      .catch(error => console.log(error))
  }, [])
  return (
    <div className='home-page'>
      <h2 id='heading'>Social Media For Travellers</h2>
      <div className='input-div'>
        <HiOutlineMagnifyingGlass id='mag-glass' />
        <span>
          <input type='text' placeholder='search Here......' id='input' />
        </span>
      </div>
      <div className='post-container'>
          {
            posts.map((item, index) =>{
              return(
                <div className='post' key={index}>
                  <img src={image}/>
                  <div className='post-data'>
                    <div >
                      <h3>{item.title}</h3>
                      <p id='post-description'>{item.body}</p>
                    </div>
                    <div className='right-icon-div'>
                      <button onClick={() => navigate('/item')} id='right-icon'><FaAngleRight /></button>
                    </div>
                  </div>  
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default Home