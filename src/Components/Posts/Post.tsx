import  './Post.css'
import PhotoPost from './PhotoPost'
import {data} from "../../data";
import AddBio from "./AddBio";
import Follow from "./Follow";
const Post = ({value=1}:any) => {
 
    let uniquePost=data.filter((curEle:any)=>curEle.id===parseInt(value));
    const photoPost=uniquePost.map((curEle:any)=>{
      return{
        id:curEle.id,
        name:curEle.name,
        profilePic:curEle.profilePic,
         coverPic:curEle.coverPic,
         url:curEle.imgPost.URL,
         caption:curEle.imgPost.caption,
        likes:curEle.imgPost.likes,
         dislikes:curEle.imgPost.dislikes,
         userName:curEle.imgPost.comments[0].userName,
         comment:curEle.imgPost.comments[0].comment,
         College:curEle.bio.College,
         dis:curEle.bio.dis,
         location:curEle.bio.location,
         type:'photo',

      }
    })
  

    const videoPost=uniquePost.map((curEle:any)=>{
      return{
        id:curEle.id,
        name:curEle.name,
        profilePic:curEle.profilePic,
         coverPic:curEle.coverPic,
         url:curEle.videoPost.URL,
         caption:curEle.videoPost.caption,
        likes:curEle.videoPost.likes,
         dislikes:curEle.videoPost.dislikes,
         userName:curEle.videoPost.comments[0].userName,
         comment:curEle.videoPost.comments[0].comment,
         College:curEle.bio.College,
         dis:curEle.bio.dis,
         location:curEle.bio.location,
         type:'video',
      }
    })
  
     return(
    <div className="grid-container">
      <div className="grid-item"><AddBio/></div>
      <div className="grid-item"><PhotoPost value={photoPost}/></div>
      <div className="grid-item"><PhotoPost value={videoPost}/></div>
      <div className="grid-item"><Follow value={value}/></div>
    </div>
  );
};

export default Post;
