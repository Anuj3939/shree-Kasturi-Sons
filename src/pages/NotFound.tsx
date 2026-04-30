import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center w-full bg-[#020617]"
      style={{
        backgroundImage: `
          radial-gradient(circle 800px at 50% 0%, rgba(251,191,36,0.5), transparent 60%),
          radial-gradient(circle 600px at 50% 0%, rgba(251,191,36,0.4), transparent 50%),
          radial-gradient(circle 400px at 50% 0%, rgba(251,191,36,0.3), transparent 40%)
        `,
        backgroundAttachment: 'scroll'
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gray-300 mb-4">Oops! Page not found</p>
        <a href="/" className="text-yellow-400 hover:text-yellow-300 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
