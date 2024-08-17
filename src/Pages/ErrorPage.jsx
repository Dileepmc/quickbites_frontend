import React from 'react';

function ErrorPage(props) {
    return (
        <div>
            <h1 className='flex items-center justify-center flex-row mt-20 text-5xl text-red-500'> oops!</h1>
            <h2 className='flex items-center justify-center flex-row mt-20 text-xl text-red-500'>sorry, an unexpected error has occurred</h2>
        </div>
    );
}
export default ErrorPage;