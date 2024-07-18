// components/Footer.tsx
import React from 'react';

function getCurrentYear(): number {
    const currentDate = new Date();
    return currentDate.getFullYear();
}

const Footer: React.FC = () => {
    return (
        <div className='flex flex-col'>
            <hr className='border-gray-800' />
            <footer className=" text-gray-400 py-4 mt-2">
                <div className="container mx-auto text-center">
                    <p className="text-sm">
                        © Copyright {getCurrentYear()} - Developed by Ashish Mahawal. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>

    );
};

export default Footer;