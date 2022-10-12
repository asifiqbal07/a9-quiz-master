import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Question = ({ questionn }) => {
    const { question, correctAnswer, options, id } = questionn;
    console.log(options);
    const validation = (value) => {
        console.log(value);
        if (value === correctAnswer) {
            toast.success("Correct!!")
        }
        else {
            toast.error('Wrong')
        }

    }
    return (
        <div className='mt-10'>
            <div className=' bg-white rounded-lg shadow-lg border'>
               <div>
               <h1 className='font-bold text-2xl p-5 text-cyan-600 '>{question.slice(3, -4)}</h1>
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
                        autoClose={1000}
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