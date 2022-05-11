import React, { useState } from "react";
import "./chatlist.css";
const ChatList = ({ user }) => {
  const [image, setImage] = useState("none")
  const [url, setUrl] = useState("")
  const [plus, setPlus] = useState("block")
  const [background, setBackground] = useState("violet")
  const handleChange = (e) => {
    setUrl(e.target.value)
  }
  const handleUrl = (e) => {
    e.preventDefault()
    console.log(url)
    setPlus("none")
    setDisplay("none")
    setImage("block")
    setBackground("white")
  }
  const [display, setDisplay] = useState("none");
  const handlePicture = () => {
    display === "none" ? setDisplay("block") : setDisplay("block");
  };
  console.log(display);
  const styleUrl = {
    display: display,
   
  };
  const pfp ={
    display: "flex",
  backgroundColor: background,
  alignItems: "center",
  border :"none"
  } 
  


  const stylePfp={
    display: image,
    backgroundImage: `url(${url})`,
    
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  border: "2px solid black",
  overFlow:"hidden",
  }
  
 const styleplus={
  display: plus,
 
 }
  return (
    <div>
      <div className="chatlist">
        <div  >
          <button style={pfp} onClick={() =>{ handlePicture()
          } 
        }>
            <span style={styleplus}>+</span>
            <form onSubmit={(e)=>handleUrl(e)}>

            <input placeholder="ENTER URL ..." type="text" value={url} style={styleUrl} onChange={handleChange} />
            <span style={stylePfp}></span>
            </form>
          </button>
        </div>
        <h4>{user.name}</h4>
      </div>
    </div>
  );
};

export default ChatList;
