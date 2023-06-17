import React from 'react'
import CoverPhoto from './CoverPhoto'
import Post from './Posts/Post'
import { useParams } from 'react-router-dom'

const Home = () => {
    const {id}:any=useParams();
  return (
    <div>
      <CoverPhoto value={id}/>
      <Post value={id}/>
    </div>
  )
}

export default Home
