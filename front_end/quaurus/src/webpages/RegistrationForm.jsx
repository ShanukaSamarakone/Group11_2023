import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        password:""

    });

    
    let navigate=useNavigate();


    const{name,username,email,password}=user;

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]: e.target.value});
    };

    const onSubmit=async(e)=>{
    e.preventDefault();
    try{
    await axios.post("http://localhost:8080/user",user);
    navigate("/");
    } catch (error) {
        console.error('Error submitting registration form:',error);
    }

    };

  return (
    <div>
        <section>

        <div className="registration-form">
        <h1> Registration Form</h1>
        <form onSubmit={(e)=>onSubmit(e)}>
            <input type="text" 
            className="name" 
            placeholder="Full Name" 
            value={name} 
            onChange={(e)=>onInputChange(e)}
            />
            
            <input type="text" 
            className="username" 
            placeholder="User Name" 
            value={username}
            onChange={(e)=>onInputChange(e)}
            />
            
            <input type="text" 
            className="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e)=>onInputChange(e)}
            />
            
            <input type="text" 
            className="password" 
            placeholder="Password" 
            value={password}
            onChange={(e)=>onInputChange(e)}/>
            <button type="submit"><a href="/Home">Submit</a></button>
        </form>
    </div>
    </section>
    </div>
  );
}

export default RegistrationForm;
