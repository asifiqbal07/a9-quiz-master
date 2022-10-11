import React from 'react';

const Topic = ({ topic }) => {
    const { name, logo } = topic;
    return (
        <div className='p-3 shadow-lg rounded-lg bg-white mt-16'>
            <img className='h-auto bg-slate-300 rounded-lg' src={logo} alt="" />
            <div className='flex justify-between items-center'>
            <h2 className='mt-3 font-bold text-[#13274F]'>Name: {name}</h2>
            <button className='mt-3 bg-[#6495ED] text-white px-3 py-1 rounded-md hover:bg-white hover:text-[#6495ED] hover: border border-[#6495ED]'> Start Practice</button>
            </div>
            
        </div>
    );
};

export default Topic;