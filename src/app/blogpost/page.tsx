"use client";

export default function BlogPostsGrid() {
  const posts = [
    {
      title: "Introduction to HTML",
      description:
        "HTML stands for HyperText Markup Language. It is the standard language for creating web pages. In this post, we’ll explore the basics of HTML...",
      icon: "/html.png",
      link: "/htmlpage",
    },
    {
      title: "Introduction to CSS",
      description:
        "CSS stands for Cascading Style Sheets. It is used to style HTML documents. In this post, we’ll dive into the basics of CSS...",
      icon: "/css-3.png",
      link: "/csspage",
    },
    {
      title: "Introduction to JavaScript",
      description:
        "JavaScript is a programming language that adds interactivity to websites. In this post, we’ll cover the basics of JavaScript...",
      icon: "/js.png",
      link: "/javascriptpage",
    },
    {
      title: "Getting Started with React",
      description:
        "React is a JavaScript library for building user interfaces. Learn the basics of React and how it simplifies front-end development...",
      icon: "/physics.png",
      link: "/reactpage",
    },
    {
      title: "Introduction to Next.js",
      description:
        "Next.js is a React framework for production-grade web applications. Discover the power of server-side rendering and static site generation...",
      icon: "/next.svg",
      link: "/nextapppage",
    },
    {
      title: "Using Tailwind CSS",
      description:
        "Tailwind CSS is a utility-first CSS framework for creating modern, responsive designs. Learn how to use Tailwind for rapid styling...",
      icon: "/tailwind-css.svg",
      link: "/tailwindpage",
    },
  ];

  return (
    <section className="bg-white text-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-teal-900 text-white rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:bg-teal-900 shadow-lg hover:shadow-xl"
            >
              <img
                src={post.icon}
                alt={post.title}
                className="w-16 h-16 mb-4 animate-fadeIn"
              />
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{post.description}</p>
              <a 
                href={post.link} 
                className="text-blue-500 hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
