import React from 'react';

const Question = ({ questionn }) => {
    const{question, correctAnswer, options} = questionn;
console.log(question);
    return (
        <div className=''>
            <div className='m-5 bg-white'>
                <h1 className='font-bold text-1xl'>{question}</h1>
                <ol className='grid grid-cols-2 gap-5'>
                        <li className=''>{options}</li>
                </ol>
            </div>
        </div>
    );
};

export default Question;