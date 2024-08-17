import React from 'react';
import map from '../Assets/map.png';
import restaurant from '../Assets/restaurant.png';
import food from '../Assets/fastfood.png';
import man from '../Assets/man.png';

function HomePage(props) {
    return (
        <main className='h-full-screen mt-20 bg-gray-100'>
            <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: "url('image/burger.jpg')" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white'>
                    <h1 className='text-6xl font-bold mb-4'>Get your food fast & easy</h1>
                </div>
            </div>
            <div className='flex flex-col items-center font-serif p-8'>
                <h2 className='text-4xl font-bold text-green-400'>How It Works</h2>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 p-20'>
                    {[ 
                        { img: map, step: 1, text: 'Choose your Location' },
                        { img: restaurant, step: 2, text: 'Choose your Restaurant' },
                        { img: food, step: 3, text: 'Make your Order' },
                        { img: man, step: 4, text: 'Food is on the Way' },
                    ].map(({ img, step, text }) => (
                        <div key={step} className='flex flex-col items-center text-center'>
                            <img className='w-20 mb-2 transition-transform duration-300 transform hover:scale-110' src={img} alt="" />
                            <h2 className='font-bold text-2xl'>{step}</h2>
                            <h3 className='text-xl'>{text}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative  h-screen bg-cover bg-center mb-4' style={{ backgroundImage: "url('/image/pizza-food.jpg')" }}> </div>

            <div className='bg-yellow-300 p-4 mb-8'>
                <h2 className='text-center text-xl p-8 font-bold'>Get Rs.40 off on Your First Order</h2>
            </div>
        </main>
    );
}

export default HomePage;
