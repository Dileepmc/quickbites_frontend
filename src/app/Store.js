import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../features/Auth/Authslice'
import cartReducer from '../features/cartslice'



export default configureStore({
    reducer: {
        Auth: AuthReducer,
        cart: cartReducer

    
    
        
        
    }
});