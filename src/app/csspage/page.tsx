"use client";

export default function CSSIntroduction() {
  return (
    <section className="bg-teal-700 text-white min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Header Icon and Title */}
          <img
            src="/css-3.png"
            alt="CSS Icon"
            className="w-20 h-20 mb-6 animate-bounce"
          />
          <h1 className="text-4xl font-bold mb-4">Introduction to CSS</h1>
          <p className="text-lg text-white text-center mb-8 max-w-2xl">
            Unlock the power of styling with CSS (Cascading Style Sheets), the
            language that brings your HTML to life with colors, layouts, and
            animations.
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-sky-400 rounded-lg shadow-lg p-6 max-w-3xl w-full mx-auto ">
          <h2 className="text-2xl font-semibold mb-4">What is CSS?</h2>
          <p className="text-white mb-6">
            CSS is a stylesheet language used to describe the presentation of a
            document written in HTML or XML. It controls the layout, colors,
            fonts, and overall visual appearance of a webpage.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Key Features of CSS</h2>
          <ul className="list-disc list-inside text-white mb-6 space-y-2">
            <li>
              <strong>Selectors:</strong> Target HTML elements to apply styles.
            </li>
            <li>
              <strong>Box Model:</strong> Understand margins, borders, padding,
              and content.
            </li>
            <li>
              <strong>Responsive Design:</strong> Create adaptable layouts using
              media queries.
            </li>
            <li>
              <strong>Animations:</strong> Add motion effects to elements with{' '}
              <code>@keyframes</code>.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">How to Use CSS</h2>
          <ol className="list-decimal list-inside text-white space-y-4">
            <li>
              <strong>Inline CSS:</strong> Apply styles directly to an element
              using the <code>style</code> attribute.
            </li>
            <li>
              <strong>Internal CSS:</strong> Use a <code>&lt;style&gt;</code>{' '}
              tag in the <code>&lt;head&gt;</code> of your HTML document.
            </li>
            <li>
              <strong>External CSS:</strong> Link an external stylesheet using
              the <code>&lt;link&gt;</code> tag.
            </li>
          </ol>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="bg-teal-900 text-white py-2 px-6 rounded-lg hover:bg-sky-400 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}
