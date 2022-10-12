import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quizzes = () => {
    const quiz = useLoaderData();
    const {data} = quiz;
    const {name, questions} = data;
    return (
        <div className='mt-10'>
            <h2 className='text-3xl font-bold text-white'>Quiz of {name}</h2>
            <div>
                {
                    questions.map(questionn => <Question
                    key={questionn.id}
                    questionn={questionn}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default Quizzes;