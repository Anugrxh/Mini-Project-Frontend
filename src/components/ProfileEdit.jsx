
import React, { useState, useEffect } from "react";

export default function ProfileEdit({ isOpen, onClose, user }) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    email: user?.email || "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match" });
      return;
    }

    try {
      const token = localStorage.getItem("access");
      const response = await fetch("http://127.0.0.1:8000/api/profile/update/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          password: formData.password || undefined,
        }),
      });

      if (response.ok) {
        setMessage({ type: "success", text: "Profile updated successfully!" });
        setTimeout(() => onClose(), 2000); // close after success
      } else {
        setMessage({ type: "error", text: "Update failed. Try again." });
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Try later." });
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-lg bg-gray-900/90 border border-gray-700 rounded-2xl shadow-xl p-6 relative">
        <h2 className="text-xl font-bold text-white mb-4">Edit Profile</h2>

        {message && (
          <div
            className={`mb-4 px-4 py-2 rounded-lg text-center font-medium ${
              message.type === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-300 mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Email (locked) */}
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              readOnly
              className="w-full px-4 py-2 rounded-lg bg-gray-700/70 border border-gray-600 text-gray-400 cursor-not-allowed"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-1">New Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter new password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {/* Popup animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
