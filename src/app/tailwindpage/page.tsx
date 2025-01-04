import React from 'react';
import Link from 'next/link';

export default function TailwindCSSPage() {
  return (
    <section className="bg-gray-900 text-white py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <img
            src="/tailwind-css.svg"
            alt="Tailwind CSS Logo"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold">Introduction to Tailwind CSS</h1>
          <p className="text-gray-400 mt-2">
            Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.
          </p>
        </div>

        <div className="mx-auto bg-teal-800 rounded-lg shadow-lg p-6 max-w-3xl w-full ">
          <h2 className="text-2xl font-bold mb-4">What is Tailwind CSS?</h2>
          <p className="text-gray-300 mb-4">
            Tailwind CSS is a highly customizable, utility-first CSS framework that provides low-level utility classes to build custom designs without writing CSS from scratch. It allows developers to compose and style elements directly in their markup.
          </p>

          <h2 className="text-2xl font-bold mb-4">Key Features of Tailwind CSS</h2>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li><strong>Utility-first:</strong> Tailwind provides small, composable utility classes to style elements directly in HTML.</li>
            <li><strong>Responsive Design:</strong> Built-in support for responsive design with breakpoints like <code className="bg-gray-700 px-1 rounded">sm</code>, <code className="bg-gray-700 px-1 rounded">md</code>, and <code className="bg-gray-700 px-1 rounded">lg</code>.</li>
            <li><strong>Customization:</strong> Fully customizable through a configuration file (<code className="bg-gray-700 px-1 rounded">tailwind.config.js</code>).</li>
            <li><strong>Utility Plugins:</strong> Includes plugins for animations, typography, forms, and more.</li>
            <li><strong>Developer Efficiency:</strong> Speeds up the development process by eliminating the need to write custom CSS for common styles.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">How to Use Tailwind CSS</h2>
          <p className="text-gray-300 mb-4">
            To start using Tailwind CSS in your project, follow these steps:
          </p>
          <ol className="list-decimal pl-6 text-gray-300 mb-4">
            <li>
              Install Tailwind CSS: Use npm or yarn to install Tailwind CSS as a dependency in your project:
              <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg overflow-auto mb-4">
                <code>
                  {`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init`}
                </code>
              </pre>
            </li>
            <li>
              Configure Tailwind: Update your <code className="bg-gray-700 px-1 rounded">tailwind.config.js</code> file to include the paths to your content files.
            </li>
            <li>
              Add Tailwind to your CSS: Import Tailwind's base, components, and utilities in your main CSS file:
              <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg overflow-auto mb-4">
                <code>
                  {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                </code>
              </pre>
            </li>
            <li>
              Start Building: Use Tailwind's utility classes to style your HTML elements.
            </li>
          </ol>

          <p className="text-gray-300 mb-4">
            Here's an example of a simple button styled with Tailwind CSS:
          </p>
          <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg overflow-auto mb-4">
            <code>
              {`<button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
  Click Me
</button>`}
            </code>
          </pre>
        </div>

        <div className="text-center mt-8">
        <button className="bg-teal-700 text-white hover:bg-teal-600 transition-colors mt-8 px-6 py-3 rounded shadow-lg">
       <a href="/"> Back to Home</a>
      </button>
        </div>
      </div>
    </section>
  );
}
