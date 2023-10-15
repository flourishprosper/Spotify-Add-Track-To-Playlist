import React from 'react';
import Auth from './Auth';

function Navigation({ isLoggedIn, setToken }) {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* ... rest of your navigation structure ... */}
                    
                    {/* Links */}
                    <div className="flex space-x-4">
                        <a href="#home" className="text-white">Home</a>
                        <a href="#adds" className="text-white">Adds</a>
                        
                        {/* Auth Component */}
                        <Auth isLoggedIn={isLoggedIn} setToken={setToken} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
