import React from "react";
import "./CoverPhoto.css";
import { data } from "../data";

const CoverPhoto = ({value=1}:any) => {
  let uniqueCover=data.filter((curEle:any)=>curEle.id===parseInt(value))[0]
  return (
    <div
      className="main-cover"
      style={{ backgroundImage: `url(${uniqueCover.coverPic})`, opacity: "1" }}
    >
      <div className="sub-cover">
        <div className="pic1">
          <div>
            <img src={uniqueCover.profilePic} alt="profile pic" className="img1" />
          </div>
          <div className="pic2">
            <p>Timeline</p>
            <p>About</p>
            <p>Album</p>
            <p>Friends</p>
          </div>
        </div>
        <div className="pic3">
          <p>1,277 people following her</p>
          <button className="btn">Add Friend</button>
        </div>
      </div>
    </div>
  );
};

export default CoverPhoto;
