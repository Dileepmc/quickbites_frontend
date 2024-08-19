import React, { useState } from 'react';
import send from '../Assets/send.png'
import axios from 'axios';


function ContactPage(props) {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };


    const handleSend = (e) => {
        e.preventDefault();

        axios.post(`${import.meta.env.VITE_API_URL}/contact`, formState)
            .then(response => {
                setResponseMessage('Message sent successfully!');
                console.log(response.data);
                setFormState({ name: '', email: '', message: '' });
            })
            .catch(error => {
                setResponseMessage('Failed to send message.');
                console.error(error);
            });
    }

    return (

        <main className='h-screen-full mt-20 '>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 p-20 gap-8 '>
                <div className='border bg-green-300 p-16 rounded-xl  ' >
                    <h1 className=' text-3xl text-center'>Address</h1>
                    < p className='text-gray-400  text-center '>mangaluru street 103 Layout</p>
                </div>
                <div className='border bg-pink-300 p-20 rounded-xl'>
                    <h1 className='text-3xl text-center'>Phone</h1>
                    <p className='text-yellow-500 text-center'>123-456-7890</p>
                </div>
                <div className='border bg-yellow-300 p-20 rounded-xl'>
                    <h1 className='text-3xl text-center'>Email</h1>
                    <p className='text-gray-400 text-center' >info@yoursite.com</p>
                </div>
            </div>
            <div className='grid justify-center'>
                <h1 className='text-4xl'>Contact us</h1>
                <p className='text-lg underline'>please fill the form below</p>
            </div>
            <form className='grid  justify-center gap-4' onSubmit={handleSend}>
                <input className='border border-green-300 mt-4 shadow-md rounded-md  py-2' type="text" id='name' name='name' placeholder='Your name*' value={formState.name}
                    onChange={handleChange} />
                <input className='border  border-green-300 shadow-md rounded-md py-2' type="email" id='email' name='email' placeholder='enter your email*' value={formState.email}
                    onChange={handleChange} />
                <textarea className='border border-green-300  px-28 py-12 shadow-md' id="message" name='message' placeholder='Type your message*'    value={formState.message}
                    onChange={handleChange}></textarea>
                <button className='bg-green-400 hover:bg-green-500 mb-4 p-2 rounded-2xl text-xl ' type="submit">send</button>
                <img className='w-5 relative ml-56 -mt-16' src={send} alt="" />
                {responseMessage && <p className='text-center mt-4'>{responseMessage}</p>}






            </form>

        </main>
    );
}

export default ContactPage;