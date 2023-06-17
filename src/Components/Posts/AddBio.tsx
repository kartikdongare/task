import React from "react";
import { data } from "../../data";
const AddBio = () => {
  return (
    <div className="main-bio">
      <p style={{ fontWeight: "bold" }}>Intro</p>
      <div>
        <button className="btn2">Add Bio</button>
      </div>
      {
        data.map((val:any)=>(
            <div className="bio-container" key={val.id}>
                <div className='bio-icon'><i className="fa fa-briefcase" aria-hidden="true" ></i></div>
                <div>{val.bio.College}</div>
            </div>
        ))
      }
    </div>
  );
};

export default AddBio;
