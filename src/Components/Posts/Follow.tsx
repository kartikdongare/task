import { useEffect, useState } from "react";
import { data as followData } from "../../data";
import { useNavigate } from "react-router-dom";

const Follow = ({ value }: any) => {
  const navTo = useNavigate();

  const friend = followData.filter(
    (curEle: any) => curEle.id === parseInt(value)
  );
  const [friendList, setfriendList] = useState<any>([]);
  useEffect(() => {
    setfriendList(friend.map((curEle: any) => curEle.friends));
  }, [value]);

  const handleClick = (id: number) => {
    navTo(`/${id}`);
  };
  const handleChange = (id: number) => {
    let x = friendList[0].map((curEle: any) => {
      if (curEle.id === id){
        return {
          ...curEle,
          isFriend: true,
        }}
      
    return {
        ...curEle,
      };
    });
    setfriendList([x]);
  };
  return (
    <div className="main-follow">
      <h2 style={{ opacity: "0.5" }}>Who follow me</h2>

      {Array.isArray(friendList) &&
        friendList[0]?.map((curEle: any) => (
          <div className="follow-container" key={curEle.frname}>
            <div>
              <img
                src={curEle.profilePic}
                alt="follow phtoto"
                className="photoimg1"
              />
            </div>
            <div className="sub-container">
              <div
                style={{
                  color: "#146cfa",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                onClick={() => handleClick(curEle.id)}
              >
                {curEle.frname}
              </div>
              <div
                style={{ color: "green", fontSize: "15px", cursor: "pointer" }}
                onClick={() => handleChange(curEle.id)}
              >
                {curEle.isFriend ? "Added" : "Add friend"}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Follow;
