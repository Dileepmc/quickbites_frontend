import React from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { adduser } from '../features/Auth/Authslice';

function SignupPage(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleSignup = (e) => {
        e.preventDefault()
        const form = e.target
        const firstname = form['firstname'].value
        const lastname = form['lastname'].value
        const email = form['email'].value
        const password = form['password'].value

        axios.post(`${import.meta.env.VITE_API_URL}/users/signup`, { firstname, lastname, email, password }, {withCredentials:true})
            .then(data => {
                const user = (data.data.user)
                console.log(user)
                dispatch(adduser(user))
                navigate("/login");
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <main className='h-screen mt-20'>
            <section className='h-full flex items-center justify-center bg-gradient-to-r from-violet-200 to-pink-300 '>
                <form className='flex flex-col shadow-lg p-12  ' onSubmit={handleSignup}>
                    <h1 className='text-2xl font-bold ml-12 mb-2'>REGISTER</h1>
                    <input className='border border-green-300	mt-4 py-1 px-4 rounded-lg shadow-md' type="text" id='firstname' name='firstname'placeholder='First Name' />
                    <input className='border border-green-300	mt-4 py-1 px-4 rounded-lg shadow-md' type="text" id='lastname' name='lastname' placeholder='Last Name'/>
                    <input className='border border-green-300	mt-4 py-1 px-4 rounded-lg shadow-md' type="email" id='email' name='email' placeholder='Email' />
                    <input className='border border-green-300	mt-4 py-1 px-4 rounded-lg shadow-md' type="password" id='password' name='password' placeholder='Password' />
                    <button className=' p-2 bg-green-400 hover:bg-green-500 transition-colors	text-white rounded-md mt-4' type="submit">SignUp</button>
                </form>
            </section>
        </main>
    );
}

export default  SignupPage;