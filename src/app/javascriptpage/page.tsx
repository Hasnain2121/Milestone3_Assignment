import React from 'react';
import Link from 'next/link';

export default function JavaScriptPage() {
  return (
    <section className="bg-teal-800 text-white py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <img
            src="/js.png"
            alt="JavaScript Logo"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold">Introduction to JavaScript</h1>
          <p className="text-gray-400 mt-2">
            JavaScript brings interactivity to web pages, making them dynamic and engaging.
          </p>
        </div>

        <div className="mx-auto bg-yellow-400 rounded-lg shadow-lg p-6 max-w-3xl w-full">
          <h2 className="text-black text-2xl font-bold mb-4">What is JavaScript?</h2>
          <p className="text-white mb-4">
            JavaScript is a versatile programming language used to create dynamic and interactive effects within web browsers. It allows you to implement complex features such as forms, slideshows, data validation, and much more. JavaScript can run both on the client-side (in the browser) and server-side (with Node.js).
          </p>

          <h2 className=" text-black text-2xl font-bold mb-4">Key Features of JavaScript</h2>
          <ul className="list-disc pl-6 text-white mb-4">
            <li><strong>Event-driven programming:</strong> JavaScript can listen for user interactions like clicks and keypresses to trigger actions in real-time.</li>
            <li><strong>DOM Manipulation:</strong> JavaScript allows you to interact with HTML elements, changing their content, style, and behavior.</li>
            <li><strong>Asynchronous Programming:</strong> JavaScript can handle tasks asynchronously, such as fetching data from APIs or performing background tasks, to keep pages fast and responsive.</li>
            <li><strong>Cross-platform:</strong> JavaScript can run on all major browsers and can also be used on the server-side with Node.js.</li>
          </ul>

          <h2 className="text-black text-2xl font-bold mb-4">How to Use JavaScript</h2>
          <p className="text-white mb-4">
            JavaScript can be added to a web page in the following ways:
          </p>
          <ol className="list-decimal pl-6 text-white mb-4">
            <li>
              Inline JavaScript: Adding JavaScript code directly inside an HTML element using the <code className="bg-gray-700 px-1 rounded">onclick</code> or other event attributes.
            </li>
            <li>
              Internal JavaScript: Placing JavaScript code in a <code className="bg-gray-700 px-1 rounded">&lt;script&gt;</code> tag within the HTML document, typically inside the <code className="bg-gray-700 px-1 rounded">&lt;head&gt;</code> or <code className="bg-gray-700 px-1 rounded">&lt;body&gt;</code>.
            </li>
            <li>
              External JavaScript: Linking to an external JavaScript file using the <code className="bg-gray-700 px-1 rounded">&lt;script src=&quot;...&quot;&gt;</code> tag.
            </li>
          </ol>

          <p className="text-gray-300 mb-4">
            Here's a simple example of JavaScript in action:
          </p>
          <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg overflow-auto mb-4">
            <code>
             
            </code>
          </pre>
        </div>

        <div className="text-center mt-8">
          <button className="bg-teal-900 text-white hover:bg-yellow-500 transition-colors mt-8 px-6 py-3 rounded shadow-lg">
       <a href="/"> Back to Home</a>
      </button>
        </div>
      </div>
    </section>
  );
}
