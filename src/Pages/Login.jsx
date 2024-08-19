import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { adduser } from '../features/Auth/Authslice';

function LoginPage(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');


    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form['email'].value
        const password = form['password'].value

        axios.post(`${import.meta.env.VITE_API_URL}/users/login`, { email, password }, { withCredentials: true })
            .then(data => {
                const user = (data.data.user)
                console.log(user)
                setLoginSuccess('Login successful.');
                setLoginError('');
                dispatch(adduser(user))
                navigate('/menu')
            })
            .catch(error => {
                setLoginError('Invalid Email or Password.');
                setLoginSuccess('');
                console.error('Login error:', error);
             })
    }

    return (
        <main className='h-screen mt-20  '>
            <section className='h-full flex items-center justify-center bg-gradient-to-r from-violet-200 to-pink-300 '>
                <form className='flex flex-col shadow-xl p-12 ' onSubmit={handleLogin}>
                    <h1 className='text-2xl  font-bold ml-20 mb-2'>LOGIN</h1>
                    {loginError && <p className="text-red-500">{loginError}</p>}
                    {loginSuccess && <p className="text-green-500">{loginSuccess}</p>}
                    <label className='font-semibold' htmlFor="email">Email </label>
                    <input className='border border-green-300 mt-2 rounded-md shadow-md ' type="text" id='email' name='email' placeholder='Email' />
                    <label className='font-semibold' htmlFor="password ">Password </label>
                    <input className='border border-green-300 mt-2 rounded-md shadow-md' type="password" id='password' name='password' placeholder='Password' />
                    <button className='py-1 px-4 bg-green-400 hover:bg-green-500 transition-colors text-white rounded-sm mt-4' type="submit">Login</button>
                    <div className='flex flex-row gap-4'>
                        <span className='text-blue-700 mt-2'>Don't have an account?</span>
                        <Link className='flex text-orange-400 mt-2' to="/login/signup">SignUp</Link>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default LoginPage;