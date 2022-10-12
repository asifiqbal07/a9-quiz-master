import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Quizzes from './components/Quizzes/Quizzes';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './Main.js/Main';
import logo from './Logoo.png'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>,
        },

        {
          path: '/topic/:topicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <Quizzes></Quizzes>
        },

        {
          path: 'statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>,
        },
        {
          path: 'blog',
          element: <Blog></Blog>,
        },

      ]
    },
    {
      path: '*', element: <div className='text-white font-bold text-2xl'>
        This Route not Found 4O4!
        <div className='flex mt-64 items-center justify-center pb-52'>
          <img className='h-16' src={logo} alt="" srcset="" />
          <h1 className='text-white font-bold- text-4xl m-4'>Quiz Master</h1>
        </div>
      </div>
    }
  ])
  return (
    <div className="mx-10 lg:mx-32 my-5 App">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
