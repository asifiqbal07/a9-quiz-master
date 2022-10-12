import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-2xl font-bold text-white'>FAQS</h2>

            <div className='mt-5 bg-white rounded-lg p-5 shadow-lg '>
                <h3 className='text-2xl font-semibold  bg-cyan-600 text-white rounded p-1'>#1 What is the purpose of react router?</h3>
                <p className='mt-5'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.Routing between components is fast as the amount of data that renders is less. The rest of the data is rendered by the DOM, and even when there's tons of HTML and CSS to render, the DOM handles that part in the blink of an eye. Using lazy loading, any delay in rendering HTML is compensated for.
                    For better user experience, animations and transitions can be easily implemented when switching between different components.
                    It gives a real sense of a single-page application in action. No separate pages are rendered, and the current page doesn't refresh to load a new view.
                </p>
            </div>
            <div className='mt-5 bg-white rounded-lg p-5 shadow-lg'>
                <h3 className='text-2xl font-semibold bg-cyan-600 text-white rounded p-1'>#2 How does context api work?</h3>
                <p className='mt-5'>The React Context API has been around as an experimental feature for a while now, but only in React’s version 16.3.0 did it become safe to use in production. The article below will show you two basic web store apps, one built with the Context API and one without it.
                    This new API solves one major problem–prop drilling. Even if you’re not familiar with the term, if you’ve worked on a React.js app, it has probably happened to you. Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components. Component will receive props indirectly and you, the React Developer will have to ensure everything works out right.
                </p>
            </div>
            <div className='mt-5 bg-white rounded-lg p-5 shadow-lg'>
                <h3 className='text-2xl font-semibold bg-cyan-600 text-white rounded p-1'>#3 What is useRef hook?</h3>
                <p className='mt-5'>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                </p>
            </div>
        </div>
    );
};

export default Blog;