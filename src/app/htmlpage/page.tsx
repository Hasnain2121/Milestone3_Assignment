import React from "react";

export default function HtmlIntroduction() {
  return (
    <div className="bg-teal-900 text-white min-h-screen flex flex-col items-center justify-center py-8 px-4">
      {/* Header Section */}
      <header className="text-center mb-8">
        <img src="/html.png" alt="HTML Logo" className="h-16 mx-auto mb-4" />
        <h1 className="text-4xl font-bold">Introduction to HTML</h1>
        <p className="text-lg mt-2 text-gray-300">
          Unlock the power of the web with HTML, the backbone of every web page.
        </p>
      </header>

      {/* Content Section */}
      <div className="bg-orange-600 rounded-lg shadow-lg p-6 max-w-3xl w-full">
        {/* What is HTML? */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">What is HTML?</h2>
          <p className="text-gray-300">
            HTML (HyperText Markup Language) is the standard language used to
            create the structure of web pages. It uses elements and tags to
            define content, such as headings, paragraphs, images, and links.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Key Features of HTML</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>
              <strong>Semantic Tags:</strong> Define the purpose of elements,
              like <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, and{" "}
              <code>&lt;article&gt;</code>.
            </li>
            <li>
              <strong>Hyperlinks:</strong> Connect pages using the{" "}
              <code>&lt;a&gt;</code> tag.
            </li>
            <li>
              <strong>Forms:</strong> Collect user input with{" "}
              <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, and related
              elements.
            </li>
            <li>
              <strong>Media Support:</strong> Embed images, videos, and audio
              using <code>&lt;img&gt;</code>, <code>&lt;video&gt;</code>, and{" "}
              <code>&lt;audio&gt;</code>.
            </li>
          </ul>
        </section>

        {/* How to Use HTML */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">How to Use HTML</h2>
          <ol className="list-decimal list-inside text-gray-300">
            <li>
              Open a text editor (e.g., VSCode) and create a new file with the
              <code className="bg-teal-700 px-1 rounded">.html</code> extension.
            </li>
            <li>Add a basic structure:</li>
          </ol>
          <pre className="bg-gray-900 text-white p-4 rounded mt-4 overflow-x-auto">
            {`<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}
          </pre>
          <p className="text-gray-300 mt-4">
            Save the file and open it in a browser to see your web page.
          </p>
        </section>
      </div>

      {/* Back Button */}
      <button className="bg-teal-700 text-white hover:bg-orange-600 transition-colors mt-8 px-6 py-3 rounded shadow-lg">
        <a href="/"> Back to Home</a>
      </button>
    </div>
  );
}
