import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo, id, total } = topic;
    console.log(topic);
    return (
        <div className='p-3 shadow-lg rounded-lg bg-white mt-16'>
            <img className='h-auto bg-slate-200 rounded-lg' src={logo} alt="" />
            <div className='flex justify-between items-center'>
                <div className='text-left'>
                    <h2 className='mt-3 font-bold text-cyan-600'>Name: {name}</h2>
                    <h2 className='font-bold text-cyan-600'>Total Quizzes: {total}</h2>
                </div>

                <p>
                    <small><Link to={`/topic/${id}`}>

                        <button className='mt-3 font-bold bg-[#6495ED] text-white px-3 py-2 rounded-md hover:bg-white hover:text-[#6495ED] hover: border border-[#6495ED]'> Start Practice</button>

                    </Link></small>
                </p>
            </div>

        </div>
    );
};

export default Topic;