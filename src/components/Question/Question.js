import React from 'react';

const Question = ({ questionn }) => {
    const { question, correctAnswer, options, id } = questionn;
    console.log(question);
    const validation = (value) => {
        console.log(value)
    }
    return (
        <div className='mt-10'>
            <div className=' bg-white rounded-lg shadow-lg border'>
                <h1 className='font-bold text-2xl p-5 text-cyan-600 '>{question.slice(3, -4)}</h1>
                <div className='p-4'>
                {
                    options.map(option => <button className='block w-full rounded p-4 font-semibold text-lg hover:bg-cyan-600 hover:text-white border my-2 border-cyan-600' 
                        onClick={() => validation(id)}>
                        <input className='mr-5' type='radio'/>{option}
                    </button>)
                }
                </div>
            </div>
        </div>
    );
};

export default Question;