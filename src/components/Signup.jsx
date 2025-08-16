import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaUser, FaPhone, FaEye, FaEyeSlash } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* PrepWise Logo top-left */}
      <div className="absolute top-6 left-8 flex items-center z-10">
        <SiCodeforces className="text-indigo-400 text-2xl mr-2" />
        <span className="font-extrabold text-xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          PrepWise
        </span>
      </div>

      {/* Animated Background Orbs */}
      <motion.div
        className="absolute -top-32 -left-32 z-0 h-96 w-96 rounded-full bg-indigo-600/40 blur-[160px]"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 z-0 h-96 w-96 rounded-full bg-purple-600/40 blur-[170px]"
        animate={{ x: [0, -45, 45, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-md w-full rounded-2xl bg-gray-800/60 p-10 backdrop-blur-xl shadow-2xl text-white mx-4 sm:mx-0"
      >
        <h1 className="mb-2 text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Create Account
        </h1>
        <p className="mb-8 text-gray-400">Join PrepWise and start preparing today 🚀</p>

        {/* Username */}
        <div className="relative mb-4">
          <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-300 text-lg" />
          <input
            type="text"
            placeholder="Username"
            autoComplete="username"
            className="w-full rounded-xl bg-gray-900/70 py-4 pl-12 pr-4 text-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>

        {/* Email */}
        <div className="relative mb-4">
          <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-300 text-lg" />
          <input
            type="email"
            placeholder="Email"
            autoComplete="email"
            className="w-full rounded-xl bg-gray-900/70 py-4 pl-12 pr-4 text-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Mobile Number */}
        <div className="relative mb-4">
          <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-300 text-lg" />
          <input
            type="tel"
            placeholder="Mobile Number"
            autoComplete="tel"
            className="w-full rounded-xl bg-gray-900/70 py-4 pl-12 pr-4 text-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-300 text-lg" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="new-password"
            className="w-full rounded-xl bg-gray-900/70 py-4 pl-12 pr-12 text-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-300 focus:outline-none"
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-4 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-4 font-semibold shadow-lg text-lg"
        >
          Sign Up
        </motion.button>

        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
