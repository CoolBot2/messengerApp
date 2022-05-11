import { useState } from "react";
import Chat from "./components/Chat";
import ChatList from "./components/ChatList";
import Admin from "./components/FakeDataBase";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";

import "./styles/App.css";

function App() {
  const style = {
    
    fontFamily: "Arial",
    padding: "10px",
    textAlign: "center"
  };
  
  const [user, setUser] = useState({name:"", email:"",pfp:""})
 const [error, setError] = useState("");
 const Login = details =>{
   console.log(details);
   if (details.email === Admin.email && details.password === Admin.password) {
     console.log("logged in");
      setUser({name:details.name, email:details.email});
      
   }else{
     alert("details do not match");
   }
     
   }
   const logout = ()=>{
     console.log("logout");
    }
    
  
  return (
    <div className="App" style={style}>
      <h1>Live Chat</h1>
      <div >

      
       {user.email.trim()  !== "" && user.name.trim()!=="" ?
          <div className="inputandfriends"> <Profile className="chatlist" /> <Chat user={user} name={user.name} logout={logout} login={Login} />
          
       </div>
      : 
      <div>

        <LoginForm Login={Login} error={error} setError={setError}/>
      
        </div>
        }

      </div>
       
      
      
      
    </div>
  );
}

export default App;
