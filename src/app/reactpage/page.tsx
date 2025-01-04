import React from 'react';
import Link from 'next/link';

export default function ReactPage() {
  return (
    <section className="bg-teal-700 text-white py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <img
            src="/physics.png"
            alt="React Logo"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold">Introduction to React</h1>
          <p className="text-gray-400 mt-2">
            React is a powerful JavaScript library for building user interfaces, especially for single-page applications.
          </p>
        </div>

        <div className="bg-teal-800 rounded-lg shadow-lg p-6 max-w-3xl w-full mx-auto ">
          <h2 className="text-2xl font-bold mb-4">What is React?</h2>
          <p className="text-gray-300 mb-4">
            React is a declarative, component-based JavaScript library developed by Facebook. It allows developers to build reusable UI components and manage the state of web applications efficiently. React uses a virtual DOM to optimize rendering and ensure high performance.
          </p>

          <h2 className="text-2xl font-bold mb-4">Key Features of React</h2>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li><strong>Component-based Architecture:</strong> React applications are built using small, reusable components that manage their own state and logic.</li>
            <li><strong>Virtual DOM:</strong> React uses a virtual representation of the DOM to optimize updates and improve performance.</li>
            <li><strong>Declarative UI:</strong> React allows developers to describe what the UI should look like, and it handles the rendering and updates.</li>
            <li><strong>Unidirectional Data Flow:</strong> Data flows in a single direction, making it easier to understand and debug the application.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">How to Use React</h2>
          <p className="text-gray-300 mb-4">
            To use React, follow these steps:
          </p>
          <ol className="list-decimal pl-6 text-gray-300 mb-4">
            <li>
              Install React: Use a package manager like npm or yarn to install React in your project.
            </li>
            <li>
              Create Components: Write components as JavaScript functions or classes to represent parts of your UI.
            </li>
            <li>
              Use JSX: Write HTML-like syntax in your JavaScript files using JSX (JavaScript XML).
            </li>
          </ol>

          <p className="text-gray-300 mb-4">
            Here's a simple example of a React component:
          </p>
          <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg overflow-auto mb-4">
            <code>
              {`// Example React Component
import React from 'react';

function Greeting() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default Greeting;`}
            </code>
          </pre>
        </div>

        <div className="text-center mt-8">
        <button className="bg-teal-900 text-white hover:bg-teal-600 transition-colors mt-8 px-6 py-3 rounded shadow-lg">
       <a href="/"> Back to Home</a>
      </button>
        </div>
      </div>
    </section>
  );
}
