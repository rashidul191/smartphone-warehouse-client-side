import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='text-center my-5 py-5'>
            <h5>Error !!! Sorry Page Not Found</h5>
            <h1>404</h1>
            <Link to='/'><p>Back to Home</p></Link>
        </div>
    );
};

export default NotFound;