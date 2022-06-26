import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className='bg-info py-5 mt-5'>
            <p className='text-light'>copyright &copy; smart phone warehouse {currentYear}</p>
        </div>
    );
};

export default Footer;