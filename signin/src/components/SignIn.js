import React, {useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";
import { ReactSession } from 'react-client-session'
import Swaln from "sweetalert2";

export const SignIn =() =>{
    ReactSession.setStoreType("localStorage");
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSubmitSignIn = async (e)=>{
        e.preventDefault()
        console.log(email)
        console.log(password)

        /// Fetch here
        fetch('http://localhost:9000/login',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({email,passw:password})

        })
        .then(response =>response.json())
        .then(userinfo =>{
            ReactSession.set("userInfo", JSON.stringify(userinfo));
            const userInfo =JSON.parse(ReactSession.get('userInfo'))
            const showInf =`Welcome: ${userInfo.foundUser.name} ${userInfo.foundUser.lastName}\n  Rol: ${userInfo.foundUser.rol}`;
            Swaln.fire(showInf);
        })
        .catch(error =>{
            Swaln.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            
              })
        })
        
 
    
    }



    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome to Hotel Posada Real</h2>
                <h2 className="mt-6 text-center text-2x1 font-extrabold text-gray-900">Sign-in </h2>
                <form onSubmit={onSubmitSignIn} className="mt-8 space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <Input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            id="emai-address"
                            name="email"
                            type="email"
                            placeholder="Email address"
                        />

                        <label htmlFor="password" className="sr-only">Password</label>
                        <Input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                        />

                    </div>
                    <Button/>
                </form>
            </div>
        </div>
    )
}