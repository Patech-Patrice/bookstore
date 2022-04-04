import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Authentication() {
    const [username, setUsername] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [password_confirmation, setPasswordConfirmation] = useState([]);
    
function getUserInfo() {
    return axios.get('/api/v1/users').then((response) => response.data)
}


function handleSubmit() {
    console.log('submitted');
}

function handleChange() {
    console.log('changed');
}

    useEffect(() => {
        let mounted = true;
        getUserInfo().then((items) =>  {
          if (mounted) {
            setUsername(items);
          }
      });
      return () => {(mounted = false)};
    }, []);











    return (
        <div>
            <h1> This is where users will register</h1>
            <form onSubmit={handleSubmit}>
           
                <input type="username" name="username" placeholder="Username" value={setUsername} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} required />
                <input type="password" name="password_confirmation" placeholder="Confirm Password" value={password_confirmation} onChange={handleChange} required  />
               </form> 
            </div>
    );
}

export default Authentication;







// import React, { Component } from 'react';

// export default class Authentication extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             username:"",
//             email:"",
//             password:"",
//             password_confirmation:"",
//             authenticationErrors:""
//         }

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }
//         handleSubmit(event) {
//             console.log('form submitted');
//             event.preventDefault();
            
//         }

//         handleChange(event){
//             console.log("handle change", event);
//         }

//     render(){
//         return 
//             <div>
//                 <h1> This is the Authentication page where users will login or sign up</h1>
              
//                 </div>
            
//         }
// }

