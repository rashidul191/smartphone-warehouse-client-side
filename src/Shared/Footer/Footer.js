import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className='bg-info py-5 mt-5 text-center'>
            <p className='text-dark'>copyright &copy; smart phone warehouse {currentYear}</p>
        </div>
    );
};

export default Footer;