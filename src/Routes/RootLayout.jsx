import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../features/cartslice';
import logo from "../Assets/dish.png";
import menu from "../Assets/menu.png";
import close from "../Assets/close.png";
import cartIcon from '../Assets/new cart.png';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube, AiOutlineWhatsApp } from 'react-icons/ai';

function RootLayout(props) {

     window.scrollTo({
        top:0,
        behavior: "smooth"
     })

    const [drawerVisible, setDrawerVisible] = useState(false);
    const user = useSelector(state => state.Auth.user);
    const cartCount = useSelector(selectCartCount);

    const location = useLocation()

    const handleMenuClick = () => {
        if (!user) {
            history.push('/login');
        }
    };

    return (
        <>
            <div className='relative'>
                <div className={`fixed top-13 right-0 w-9/12 h-full bg-white transition-all duration-500 ${drawerVisible ? 'translate-x-0' : 'translate-x-full'} shadow-2xl flex items-center justify-center`}>
                    <button className='absolute top-6 right-6' onClick={() => { setDrawerVisible(false) }}>
                        <img className='w-12 h-12' src={close} alt="close" />
                    </button>
                    <nav>
                        <ul className='text-4xl'>
                            <li className='p-4'>
                                <Link to="/login">
                                    <button className='bg-slate-200 text-2xl text-orange-500 hover:text-green-500 transition-colors px-4 rounded-md mt-4' type='submit'>Login</button>
                                </Link>
                            </li>
                            <li className='p-4'>
                                <Link className='hover:text-orange-500 transition-colors' to='/'>Home</Link>
                            </li>
                            {user && (
                                <li className='p-4'>
                                    <Link className='hover:text-orange-500 transition-colors' to='/menu' onClick={handleMenuClick}>Menu</Link>
                                </li>
                            )}
                            <li className='p-4'>
                                <Link className='hover:text-orange-500 transition-colors' to='/order'>My Order</Link>
                            </li>
                            <li className='p-4'>
                                <Link className='hover:text-orange-500 transition-colors' to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='fixed top-0 w-full z-10'>
                    <header>
                        <div className='flex justify-between p-2 shadow-md bg-white'>
                            <div className='flex items-center gap-2'>
                                <img className="w-16" src={logo} alt="logo" />
                                <p className='text-red-400 text-2xl font-semibold'>QuickBite</p>
                            </div>
                            <nav className='hidden lg:block mt-4'>
                                <ul className='flex gap-8 items-center text-lg ml-12'>
                                    <li>
                                        <Link className={`hover:text-orange-400 text-lg transition-colors ${location.pathname === '/' ? 'text-orange-400 border-b-2 border-orange-400' : ''}`} onClick={scrollTo} to="/">Home</Link>
                                    </li>
                                    {user && (
                                        <li>
                                            <Link className={`hover:text-orange-400 text-lg transition-colors ${location.pathname === '/menu' ? 'text-orange-400 border-b-2 border-orange-400' : ''}`} onclick={scrollTo} to="/menu" onClick={handleMenuClick}>Menu</Link>
                                        </li>
                                    )}
                                    <li>
                                        <Link className={`hover:text-orange-400 text-lg transition-colors ${location.pathname === '/order' ? 'text-orange-400 border-b-2 border-orange-400' : ''}`} onClick={scrollTo} to="/order">My Order</Link>
                                    </li>
                                    <li>
                                        <Link className={`hover:text-orange-400 text-lg transition-colors ${location.pathname === '/contact' ? 'text-orange-400 border-b-2 border-orange-400' : ''}`} onClick={scrollTo} to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className='flex items-center gap-32 hidden lg:block'>
                                <Link to={"/UserDetails"}>
                                    {user ? (
                                        <span className='flex items-center justify-center rounded-full text-green-500 font-bold bg-slate-200 w-8 h-8 text-xl mt-4'>{user.firstname.charAt(0)}</span>
                                    ) : (
                                        <Link to="/login">
                                            <button className='bg-slate-200 text-2xl text-orange-500 hover:text-green-500 transition-colors px-4 rounded-md mt-4' type='submit'>Login</button>
                                        </Link>
                                    )}
                                </Link>
                            </div>
                            <div className='flex flex-row items-center'>
                                <Link to={"/Cart"}>
                                    <img className='w-8' src={cartIcon} alt="cart" />
                                </Link>
                                <span className='text-red-400 font-bold mb-8'>{cartCount}</span>
                                <button className='lg:hidden' onClick={() => { setDrawerVisible(true) }}>
                                    <img className='w-6' src={menu} alt="menu" />
                                </button>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            <Outlet/>
            <footer className='bg-green-500 py-12'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-white ml-12'>
                    <div>
                        <h1 className='font-bold'>COLORLIB</h1>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nemo sint incidunt omnis magnam provident unde aliquam a aliquid eaque distinctio</span>
                    </div>
                    <div>
                        <h1 className='font-bold'>TAG CLOUD</h1>
                        <span className='border'>Dish-Menu-Food-Sweet-Tasty-Delicious-Desserts-Drinks</span>
                    </div>
                    <div>
                        <h1 className='font-bold'>CATEGORIES</h1>
                        <ul>
                            <li>Buy & sell</li>
                            <li>Merchant</li>
                            <li>Giving Back</li>
                            <li>Help & support</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-bold'>FOLLOW US</h1>
                        <ul className='flex gap-2'>
                            <a className='py-2' href=""><AiFillFacebook className='bg-slate-200 box-content px-1 py-1 rounded-lg shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600' /></a>
                            <a className='py-2' href=""><AiFillTwitterCircle className='bg-slate-200 box-content px-1 py-1 rounded-lg shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600' /></a>
                            <a className='py-2' href=""><AiOutlineWhatsApp className='bg-slate-200 box-content px-1 py-1 rounded-lg shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-green-400' /></a>
                            <a className='py-2' href=""><AiFillYoutube className='bg-slate-200 box-content px-1 py-1 rounded-lg shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-red-600' /></a>
                            <a className='py-2' href=""><AiFillInstagram className='bg-slate-200 box-content px-1 py-1 rounded-lg shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-pink-600' /></a>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold'>SUBSCRIBE</h2>
                        <input type="text" id='email' name='email' placeholder='Enter the email' />
                    </div>
                </div>
            </footer>
        </>
    );
}

export default RootLayout;