import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

export default function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const handleSwitchForm = (formName) => setCurrentForm(formName);

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Floating pearls */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-white rounded-full opacity-40 absolute animate-pearl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              opacity: 0.2 + Math.random() * 0.5,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          ></div>
        ))}
      </div>

      {/* Top-left logo */}
      <div className="absolute top-6 left-6 flex items-center z-20">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
          P
        </div>
        <span className="ml-3 text-white font-bold text-2xl">PrepWise</span>
      </div>

      {/* Centered form card */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-3xl bg-white/10 shadow-2xl backdrop-blur-lg border border-white/20">
        {currentForm === 'login' ? (
          <Login onSwitchForm={handleSwitchForm} />
        ) : (
          <Signup onSwitchForm={handleSwitchForm} />
        )}
      </div>

      {/* Tailwind custom keyframes */}
      <style>
        {`
          @keyframes pearl {
            0% { transform: translateY(0) translateX(0); opacity: 0.2; }
            50% { transform: translateY(-15px) translateX(10px); opacity: 0.8; }
            100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          }
          .animate-pearl {
            animation: pearl linear infinite;
          }
        `}
      </style>
    </div>
  );
}
