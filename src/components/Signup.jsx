import React, { useState } from 'react';

// Icons
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
  </svg>
);

const PasswordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);
const MobileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01" />
  </svg>
);


const EyeIcon = ({ open }) => (
  open ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.944-9.543-7a10.05 10.05 0 011.67-3.131m3.598-2.806A9.955 9.955 0 0112 5c4.477 0 8.268 2.944 9.542 7a9.96 9.96 0 01-1.299 2.438M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
    </svg>
  )
);

const Signup = ({ onSwitchForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="animate-form-enter">
      <h2 className="text-3xl font-bold text-center text-white mb-2">
        Create Account
      </h2>
      <p className="text-center text-white/70 mb-8">
        Start your journey with us today.
      </p>

      <form className="space-y-6">
        {/* Full Name Input */}
        <div className="relative">
          <div className="absolute top-1/2 left-3 -translate-y-1/2">
            <UserIcon />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Full Name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <div className="absolute top-1/2 left-3 -translate-y-1/2">
            <EmailIcon />
          </div>
          <input
            type="email"
            className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Email Address"
            required
          />
        </div>

        {/* Mobile Input */}
        <div className="relative">
          <div className="absolute top-1/2 left-3 -translate-y-1/2">
            <MobileIcon />
          </div>
          <input
            type="email"
            className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Mobile Number"
            required
          />
        </div>

        {/* Password Input with toggle */}
        <div className="relative">
          <div className="absolute top-1/2 left-3 -translate-y-1/2">
            <PasswordIcon />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full pr-10 pl-10 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Password"
            required
          />
          <button
            type="button"
            className="absolute top-1/2 right-3 -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            <EyeIcon open={showPassword} />
          </button>
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 rounded-lg text-white font-bold text-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
        >
          Create Account
        </button>
      </form>

      {/* Switch to Login Form */}
      <p className="text-center text-sm text-white/60 mt-8">
        Already have an account?{' '}
        <button
          onClick={() => onSwitchForm('login')}
          className="font-medium text-purple-400 hover:text-purple-300 focus:outline-none focus:underline"
        >
          Log in
        </button>
      </p>
    </div>
  );
};

export default Signup;
