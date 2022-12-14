import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ questionn }) => {
    const { question, correctAnswer, options} = questionn;

    const validation = (value) => {
        
        if (value === correctAnswer) {
            toast.success("Correct!!")
        }
        else {
            toast.error('Wrong')
        }

    }
    const seeCorrectAnswer = (answer) => {
        toast.info(correctAnswer)
    }
    return (
        <div className='mt-10'>
            <div className=' bg-white rounded-lg shadow-lg border'>
                <div>
                    <h1 className='font-bold text-2xl p-5 text-cyan-600 '> {question.slice(3, -4)}</h1>
                    <button onClick={() => seeCorrectAnswer()}><EyeIcon className="h-6 w-6 text-cyan-600" /></button>
                </div>

                <div className='p-4'>
                    {
                        options.map(option => <button key={option[3]} className='block w-full rounded p-4 font-semibold text-lg hover:bg-cyan-600 hover:text-white border my-2 border-cyan-600'
                            onClick={() => validation(option)} >
                            <input className='mr-5' type='radio' />{option}
                        </button>)

                    }
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            </div>
        </div>
    );
};

export default Question;