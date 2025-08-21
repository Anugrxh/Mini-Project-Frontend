import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import ProfileEdit from "./ProfileEdit"; // ✅ Import ProfileEdit popup

export default function Navbar() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [showLoggedOutMessage, setShowLoggedOutMessage] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false); // ✅ Add state for modal
  const popoverRef = useRef(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("access");
  const isLoggedIn = !!token;

  const user = {
    name: "JohnDoe",
    email: "john.doe@example.com",
    phone: "9876543210"
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsPopoverOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (showLoggedOutMessage) {
      const timer = setTimeout(() => setShowLoggedOutMessage(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showLoggedOutMessage]);

  async function handleLogout() {
    const token = localStorage.getItem("access");
    let logoutSucceeded = false;

    if (!token) {
      navigate("/login");
      setShowLoggedOutMessage(true);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        logoutSucceeded = true;
      }
    } catch {
      // Network error, just logout locally
    } finally {
      localStorage.removeItem("access");
      setIsPopoverOpen(false);
      setShowLoggedOutMessage(true);
      navigate("/login");
    }
  }

  return (
    <>
      {showLoggedOutMessage && (
        <div
          className="
            fixed top-16 right-4 z-[9999] pointer-events-none
            bg-indigo-700 text-white px-5 py-3 rounded-lg shadow-lg backdrop-blur-md
            animate-fadeInOut
          "
          role="alert"
        >
          Successfully logged out!
        </div>
      )}

      <nav className="fixed top-0 left-0 w-full bg-gray-900/40 backdrop-blur-lg border-b border-gray-800 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 relative">
          {/* Logo Section */}
          <div className="flex items-center gap-2 font-extrabold text-xl">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              🚀 PrepWise
            </span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
            <a href="#home" className="hover:text-indigo-400 transition">
              Home
            </a>
            <a href="#history" className="hover:text-purple-400 transition">
              History
            </a>
          </div>

          {/* User Section */}
          <div className="relative">
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                  className="flex items-center gap-2 text-gray-300 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                  aria-haspopup="true"
                  aria-expanded={isPopoverOpen}
                >
                  <FaUserCircle className="h-6 w-6 text-indigo-400" />
                  <span>{user.name}</span>
                </button>

                {isPopoverOpen && (
                  <div
                    ref={popoverRef}
                    className="absolute right-0 mt-2 w-56 bg-gray-800/90 backdrop-blur-lg rounded-lg shadow-lg border border-gray-700 text-white z-30"
                    role="menu"
                    aria-label="User menu"
                  >
                    <div className="px-4 py-3 border-b border-gray-700">
                      <p className="text-base font-semibold truncate">{user.name}</p>
                      <p className="text-xs text-gray-400 truncate">{user.email}</p>
                    </div>

                    {/* ✅ Edit Profile button */}
                    <button
                      onClick={() => {
                        setIsEditOpen(true);
                        setIsPopoverOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-indigo-600 transition text-gray-200"
                      role="menuitem"
                    >
                      Edit Profile
                    </button>

                    {/* Logout */}
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 hover:bg-indigo-600 rounded-b-lg text-red-400 font-semibold transition"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="text-indigo-400 font-medium hover:underline"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* ✅ Mount ProfileEdit popup modal here */}
      <ProfileEdit
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        user={user}
      />

      <style>{`
        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0; 
            transform: translateY(-10px);
          }
          10%, 90% {
            opacity: 1; 
            transform: translateY(0);
          }
        }
        .animate-fadeInOut {
          animation: fadeInOut 3s ease forwards;
        }
      `}</style>
    </>
  );
}
