import React from 'react';
import Link from 'next/link';

export default function NextJSPage() {
  return (
    <section className="bg-teal-700 text-white py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <img
            src="/nextjs.svg"
            alt="Next.js Logo"
            className="w-20 h-20 mx-auto mb-4 bg-white "
          />
          <h1 className="text-3xl font-bold">Introduction to Next.js</h1>
          <p className="text-white mt-2">
            Next.js is a powerful React framework for building fast and scalable web applications.
          </p>
        </div>

        <div className="mx-auto bg-teal-800 rounded-lg shadow-lg p-6 max-w-3xl w-full">
          <h2 className="text-2xl font-bold mb-4">What is Next.js?</h2>
          <p className="text-white mb-4">
            Next.js is a React-based framework that enables developers to build server-side rendered (SSR) and static web applications. It provides features like file-based routing, server-side rendering, API routes, and more, simplifying the development of modern web applications.
          </p>

          <h2 className="text-2xl font-bold mb-4">Key Features of Next.js</h2>
          <ul className="list-disc pl-6 text-white mb-4">
            <li><strong>File-based Routing:</strong> Next.js uses a file system-based routing mechanism where each file in the <code className="bg-gray-700 px-1 rounded">pages</code> directory automatically becomes a route.</li>
            <li><strong>Server-side Rendering (SSR):</strong> Dynamically render pages on the server before sending them to the client.</li>
            <li><strong>Static Site Generation (SSG):</strong> Pre-render pages at build time for fast performance.</li>
            <li><strong>API Routes:</strong> Build API endpoints directly within your Next.js application.</li>
            <li><strong>Image Optimization:</strong> Automatically optimize images for faster loading.</li>
            <li><strong>Built-in CSS Support:</strong> Supports global CSS, CSS Modules, and more.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">How to Get Started with Next.js</h2>
          <p className="text- mb-4">
            Follow these steps to create your first Next.js application:
          </p>
          <ol className="list-decimal pl-6 text-white 300 mb-4">
            <li>
              Install Next.js: Run <code className="bg-gray-700 px-1 rounded">npx create-next-app</code> in your terminal.
            </li>
            <li>
              Navigate to your project directory and start the development server with <code className="bg-gray-700 px-1 rounded">npm run dev</code> or <code className="bg-gray-700 px-1 rounded">yarn dev</code>.
            </li>
            <li>
              Create a new page by adding a file in the <code className="bg-gray-700 px-1 rounded">pages</code> directory, for example, <code className="bg-gray-700 px-1 rounded">about.js</code>.
            </li>
          </ol>

          <p className="text-white mb-4">
            Here’s an example of a simple Next.js page:
          </p>
          <pre className="bg-gray-800 text-gray-400 p-4 rounded-lg overflow-auto mb-4">
            <code>
              {`// pages/index.js
import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is a simple Next.js application.</p>
    </div>
  );
}`}
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
