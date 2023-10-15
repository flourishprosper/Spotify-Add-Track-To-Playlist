import React from 'react';
import Auth from './Auth';
import { Link } from 'react-router-dom';


function Navigation({ isLoggedIn, setToken }) {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* ... rest of your navigation structure ... */}
                    
                    {/* Links */}
                    <div className="flex space-x-4">
                    <Link to="/" className="text-white">Home</Link>
                        
                        {/* Auth Component */}
                        <Auth isLoggedIn={isLoggedIn} setToken={setToken} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
