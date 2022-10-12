import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo, id } = topic;
    console.log(topic);
    return (
        <div className='p-3 shadow-lg rounded-lg bg-white mt-16'>
            <img className='h-auto bg-slate-300 rounded-lg' src={logo} alt="" />
            <div className='flex justify-between items-center'>
            <h2 className='mt-3 font-bold text-[#13274F]'>Name: {name}</h2>
            <p>
            <small><Link to={`/topic/${id}`}>

                <button className='mt-3 bg-[#6495ED] text-white px-3 py-1 rounded-md hover:bg-white hover:text-[#6495ED] hover: border border-[#6495ED]'> Start Practice</button>
                
                </Link></small>
            </p>
            </div>
            
        </div>
    );
};

export default Topic;