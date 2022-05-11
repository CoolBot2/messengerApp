

import Button from 'react-bootstrap/Button';

import Modal from 'react-modal';
import React, { useState } from 'react'
import './chatlist.css'
import axios from 'axios';

const Profile = () => {
  const [display, setDisplay] = useState("none")
 let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  Modal.setAppElement('#root')

  const handleSelect = e =>{
  setSelectedFile( e.target.files[0]) 
  }
  const handleClick=()=>{
    const data = new FormData()
    data.append('file', selectedFile)

    axios.post('http://localhost:5000/upload', data)
    .then(res => {console.log(res.statusText)});
    
      
  }
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const styles = {
    display: display,
    position: "fixed",
    flexDirection: "column",
    justifyContent: "center",
    transform: "translate(20px,50px)",
    backgroundColor: "white",
    width: "170px", 
    overflow: "hidden",

  } 
const show = () => {
  (display === "none") ? setDisplay("flex") : setDisplay("none")
}
  return (
    <div className='Profile'>
       <img onClick={()=>show()}
       
       src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg" 
       className='pfp'
       alt="" 
       />
       <div style={styles} className='settings'>
           <button onClick={openModal} className='btn4'>Preferences <img src="https://cdn-icons.flaticon.com/png/512/484/premium/484613.png?token=exp=1651961858~hmac=c8c7bb7852976c83aaaaaaec97dbe6b3" width={20} height={20} alt="" /></button>
           <button className='btn4'>Friends <img src="https://cdn-icons-png.flaticon.com/512/880/880594.png" width={20} height={20} alt="" /></button>
           <button className='btn4'>learn more <img src="https://cdn-icons-png.flaticon.com/512/1/1176.png" width={20} height={20} alt="" /></button>
           <button className='btn4'>Report bug <img src="https://cdn-icons-png.flaticon.com/512/1280/1280065.png" width={20} height={20}  alt="" /></button>
           <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
       
      >
        

        <input type="file" onChange={handleSelect} />
        <button onClick={handleClick}>upload</button>
        <button style={{backgroundColor:"red", height:'40px', border:'none',width:'80px'}} onClick={closeModal}>close</button>
       
      </Modal>
       </div>
    </div>
  )
}

export default Profile