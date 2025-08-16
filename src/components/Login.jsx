import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (response.ok) {
        // Store access token to localStorage (change key if your backend sends different key)
        if (data.access) {
          localStorage.setItem("access", data.access);
        } else if (data.token) {
          // fallback if your backend sends "token"
          localStorage.setItem("access", data.token);
        }

        navigate("/home");
      } else {
        setError(
          data.detail || data.message || "Invalid credentials. Please try again."
        );
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* PrepWise Logo top-left */}
      <div className="absolute top-6 left-8 flex items-center z-10">
        <SiCodeforces className="text-indigo-400 text-2xl mr-2" />
        <span className="font-extrabold text-xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          PrepWise
        </span>
      </div>

      {/* Animated Background Orbs */}
      <motion.div
        animate={{ y: [0, -40, 40, 0], x: [0, 50, -50, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ y: [0, 50, -50, 0], x: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-[160px]"
      />

      {/* Glassy Card */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-md backdrop-blur-xl bg-gray-800/60 p-10 rounded-2xl shadow-2xl text-white"
      >
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Welcome Back
        </h1>
        <p className="text-gray-400 mb-8">Login to continue your journey 🚀</p>

        {/* Email */}
        <div className="relative mb-4">
          <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-300 text-lg" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-900/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
          />
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-300 text-lg" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full pl-12 pr-12 py-4 rounded-xl bg-gray-900/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-300 focus:outline-none"
            tabIndex={-1}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

        {/* Login Button */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-4 rounded-xl font-semibold shadow-lg text-lg mb-4 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </motion.button>

        <p className="text-center text-gray-400">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-400 hover:underline">
            Sign up
          </Link>
        </p>
      </motion.form>
    </div>
  );
}
