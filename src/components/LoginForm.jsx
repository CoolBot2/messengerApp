import React, {useState} from 'react'


const LoginForm = ({Login, error}) => {
const [details, setDetails] = useState({name:"", email:"",password:''})
const submitHandler = (e) => {
    e.preventDefault()
    Login(details)}
  return (
    <form onSubmit={submitHandler} action="">
      <div className='form-inner'>
      <h2>login</h2>
      {/* error! */}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" className="form-control" id="name" placeholder="Enter name" onChange={e=> setDetails({...details, name: e.target.value})} value={details.name} />
      
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" name='email' className="form-control" id="email" placeholder="Enter email" onChange={e=> setDetails({...details, email: e.target.value})} value={details.email} />
        
        </div>
        <div className="form-group">
        <label htmlFor="pwd">Password:</label>
        <input type="password" name='password' className="form-control" id="pwd" placeholder="Enter password" onChange={e=> setDetails({...details, password: e.target.value})} value={details.password}/>
        <br /><input type="submit" value={"LOGIN"} />   
        </div>
      </div>
     
    </form>
  )
}

export default LoginForm