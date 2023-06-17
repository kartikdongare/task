import React, { useState } from "react";
import {data } from "../../data";

const PhotoPost = (props: any) => {
  let value: any = props.value[0];
  const [like, setLike] = useState(value.likes);
  const [dislike, setDilike] = useState(value.dislikes);

  return (
    <div className="main-photopost">
      {value.type==='photo'? 
      <img src={value.url} alt="phtot" className="photoimg" />:
      <video controls className="photoimg">
        <source src={value.url} type="video/mp4" />
      </video>
      }
      <div className="photopost-container">
        <div>
          <img
            src={value.profilePic}
            alt="profilephoto"
            className="photoimg1"
          />
        </div>
        <div>
          <div className="sub-photopost">
            <div className="sub-photopost1">
              <p>{value.name}</p>
              <p style={{ color: "green" }}> following</p>
            </div>
            <div className="sub-photopost1">
              <p style={{ color: "green" }}>
                <i
                  className="fa fa-thumbs-o-up"
                  aria-hidden="true"
                  onClick={() => setLike(like + 1)}
                ></i>
                &nbsp;
                {like}
              </p>
              <p style={{ color: "red" }}>
                <i
                  className="fa fa-thumbs-o-down"
                  aria-hidden="true"
                  onClick={() => setDilike(dislike + 1)}
                ></i>
                &nbsp;
                {dislike}
              </p>
            </div>
          </div>
          <p>Published a photo 3min</p>
          <hr />
          <p>{value.dis}</p>
          <hr />
          {data.map((val1: any) => (
            <div className="photopost-container"  key={val1.id}>
              <div>
                <img src={val1.profilePic} alt="mdd" className="photoimg1" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "6px",
                }}
              >
                <div>
                  <span style={{ color: "#146cfa" }}>{val1.name}</span>&nbsp;
                  {val1.imgPost.comments[0].comment}
                </div>
              </div>
            </div>
          ))}
          <div className="photopost-container">
            <div>
              <img
                src={value.profilePic}
                alt="profilephoto"
                className="photoimg1"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "6px",
              }}
            >
              <input className="input1" placeholder="Post a comment" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoPost;
