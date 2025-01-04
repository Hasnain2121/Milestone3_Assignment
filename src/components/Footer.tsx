// Footer Component in Next.js using Tailwind CSS
export default function Footer() {
    return (
      <footer className="bg-teal-900 shadow-xl shadow:border-black border-spacing-3 border  text-black py-4">
        <div className="text-center">
          <p className="text-sm">&copy; 2024 Hasnain. All rights reserved.</p>
          <div className="flex justify-center mt-2 space-x-4">
            <a href="https://www.facebook.com/husenain.siyal" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
              Facebook
            </a>
            <a href="https://github.com/Hasnain2121" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/muhammad-hasnain-7b56562a0/" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }
  