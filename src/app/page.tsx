import React from 'react';
import BlogPostsGrid from './blogpost/page';
import CommentSection from './comments/page';

export default function Page() {
  return (
    <div className="bg-teal-600 text-white">
      {/* Hero Section */}
      <header className="bg-teal-700 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className='text-yellow-500 text-6xl animate-pulse  '>Welcome to the World</span> of Web Development
          </h1>
          <p className="text-lg md:text-xl mt-10 mb-10">
            Dive into the exciting journey of creating websites with HTML, CSS, and JavaScript. Whether you're a beginner
            or looking to enhance your skills, our platform provides resources, tutorials, and guides to help you master
            the art of web development. Let's build something amazing together!
          </p>
          <button className="bg-white text-teal-700 hover:bg-gray-100 transition-transform transform hover:scale-105 font-semibold px-6 py-3 rounded shadow-md">
            Explore Features
          </button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 px-8 bg-white text-center text-black shadow-md">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We are dedicated to providing high-quality resources and tutorials for web developers of all levels. Our mission
          is to help you build beautiful, responsive, and functional websites with ease.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-teal-600 py-16 px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Features</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              src: '/html.png',
              title: 'HTML',
              desc: 'Learn the foundational language for creating the structure of web pages.'
            }, {
              src: '/css-3.png',
              title: 'CSS',
              desc: 'Style your web pages with beautiful designs, layouts, and animations.'
            }, {
              src: '/js.png',
              title: 'JavaScript',
              desc: 'Bring interactivity and dynamic functionality to your web applications.'
            }].map((card, index) => (
              <div
                key={index}
                className="bg-teal-900 text-white p-6 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-lg"
              >
                <img src={card.src} alt={card.title} className="h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog">
        <BlogPostsGrid />
      </section>

      {/* Profile Card Section */}
      <p className="text-center text-black text-3xl font-bold my-4 py-4 bg-white">Profile Site</p>
      <section id="profile" className="min-h-17 flex items-center justify-center bg-teal-600 text-black py-16 shadow-md">
        <div className="bg-teal-900 text-center p-8 rounded-lg shadow-lg max-w-xs transform transition-transform hover:scale-105 hover:shadow-xl">
          <img
            src="/6117.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-300 animate-bounce "
          />
          <h2 className="text-white text-xl font-bold">Muhammad Hasnain</h2>
          <p className="text-gray-400 mt-2">
            A passionate web developer with a love for learning and creating amazing web applications.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            {[{
              href: 'https://www.linkedin.com/in/muhammad-hasnain-7b56562a0/',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.381-.028-3.156-1.922-3.156-1.922 0-2.218 1.5-2.218 3.047v5.609h-3v-10h2.891v1.377h.041c.403-.764 1.387-1.566 2.855-1.566 3.05 0 3.617 2.007 3.617 4.617v5.572z" />
                </svg>
              )
            }, {
              href: 'https://github.com/Hasnain2121',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.091-.746.083-.73.083-.73 1.205.084 1.839 1.236 1.839 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.304.762-1.604-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.553 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.609-2.805 5.625-5.475 5.921.429.37.814 1.096.814 2.207v3.275c0 .32.192.694.801.576 4.765-1.589 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              )
            }].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-black transform hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Comment Section */}
      <section id="comments">
        <CommentSection />
      </section>
    </div>
  );
}
