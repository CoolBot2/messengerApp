import React, { useState } from "react";
import "./chat.css";
import bootstrap from "bootstrap";
import Admin from "./FakeDataBase";

const timeStyle ={
  fontSize: "12px",
  color: "black",
  marginTop: "-10px",
  textAlign: "right",
  
}
const Chat = ({user,logout,login}) => {
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState("");
  const handleSend = (e) => {
    const newMessage = { id: Math.random(), message: input
    //message array is here
    };
    
    
    input.trim() !== ""
      ? setMessage([...message, newMessage])
      : alert("Please enter a message");
    setInput("");
  };
  console.log(message);
  return (
    <div className="chat">
      
      <div className="textZone">
      <span>{user.name} has joined the chat</span>
      {message.map(msg =>
<div>

      
      <div className="message">
      <p >{msg.message}</p>

      </div>
      <p style={timeStyle}>1 hour ago</p>
</div>
      )}
      </div>
      <div className="inputZone" >
        <form onSubmit={(e)=>{e.preventDefault()
        handleSend()}}>

      <input
      placeholder="type your message here..."
      className="input"
      value={input}
      type="text"
      onChange={(e) => setInput(e.target.value)}
      />
      </form>
      <button className="sendBtn" onClick={() => handleSend(input)}></button>
      
        </div>
    </div>
  );
};

export default Chat;
