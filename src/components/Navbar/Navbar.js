import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center '>
            <h1 className='font-bold text-3xl text-[#13274F]'>Quiz Master</h1>
            <div className='navs'>
            <Link to='/'>Topics</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/others'>Others</Link>
            </div>
            
        </nav>
    );
};

export default Navbar;