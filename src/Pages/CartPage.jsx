import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems, removeItem, selectCartItems, selectTotalAmount } from '../features/cartslice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CartPage() {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const totalAmount = useSelector(selectTotalAmount);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const userId = '65d6eb632967740acb27132a';  
                const res = await axios.get(`http://localhost:3000/cart/${userId}`);
                dispatch(setCartItems(res.data.items));
            } catch (error) {
                console.error('Error fetching cart data:', error);
                toast.error('Error fetching cart data');
            }
        };
        fetchCart();
    }, [dispatch]);

    const handleRemoveFromCart = async (itemId) => {
        try {
            const userId = '65d6eb632967740acb27132a'; 
            await axios.delete(`http://localhost:3000/cart/delete/${itemId}`, { data: { userId } });
            dispatch(removeItem({ id: itemId }));
            toast.success('Item removed from cart successfully!');
        } catch (err) {
            console.error('Error removing item from cart:', err);
            toast.error('Failed to remove item from cart.');
        }
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        dispatch(updateItemQuantity({ id: itemId, quantity: newQuantity }));
    };

    return (
        <main className='h-screen-full mt-28 '>
            <ToastContainer />
            <h2 className='text-3xl font-bold mb-8 flex justify-center'>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className='text-lg flex justify-center'>No cart items here ......</p>
            ) : (
                <ul className='space-y-4 ml-56 mr-56' >
                    {cartItems.map(item => (
                        <li key={item._id} className='flex flex-col md:flex-row items-center bg-white border-2 shadow-md rounded-lg p-4'>
                            <img src={item.image} alt={item.name} className='w-24 h-24 md:w-32 md:h-32 object-cover rounded-md mb-4 md:mb-0 md:mr-4' />
                            <div className='flex-1'>
                                <h3 className='text-xl font-semibold'>{item.name}</h3>
                                <p className='text-gray-600'>{item.description}</p>
                                <p className='text-green-500 font-bold'>${item.price}</p>
                                <div className='mt-2 flex items-center   '>
                                    <button
                                        onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                        className=' bg-green-400 px-4  font-bold  rounded-md'
                                    >
                                        -
                                    </button>
                                    <span className='mx-2'>{item.quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                                        className=' bg-green-400 px-4 font-bold   rounded-md'
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemoveFromCart(item._id)}
                                className='bg-red-500 text-white px-4 py-2 rounded-md mt-4 md:mt-0 md:ml-4'
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <h2 className=' ml-56 text-2xl font-bold mt-8'>Total Amount: ${totalAmount}</h2>
            <Link to={'/payment'}>
                <button className=' ml-56 mt-8 mb-6 bg-green-600 text-white px-6 py-3 rounded-md'>
                    Proceed to Checkout
                </button>
            </Link>
        </main>
    );
}

export default CartPage;
