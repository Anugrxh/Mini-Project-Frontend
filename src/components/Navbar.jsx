import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/40 backdrop-blur-lg border-b border-gray-800 z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 font-extrabold text-xl">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            🚀 PrepWise
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <a href="#home" className="hover:text-indigo-400 transition">Home</a>
          <a href="#history" className="hover:text-purple-400 transition">History</a>
        </div>

        {/* User Section */}
        <div className="flex items-center gap-2 text-gray-300 font-medium">
          <FaUserCircle className="h-6 w-6 text-indigo-400" />
          <span>JohnDoe</span>
        </div>
      </div>
    </nav>
  );
}
