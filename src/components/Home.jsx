import { motion } from "framer-motion";
import { FaBriefcase, FaClipboardList } from "react-icons/fa";
import { MdOutlineBolt } from "react-icons/md";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-[170px]" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section - bigger padding and spacing */}
      <section
        id="home"
        className="relative flex flex-col flex-1 items-center justify-center text-center px-6 md:px-24 py-32 z-10 w-full"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold mb-10 leading-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          Which job should you interview for?
        </motion.h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mb-16">
          Prepare smarter with AI-powered mock interviews tailored to your role and difficulty level. 🚀
        </p>

        {/* Inputs - larger input heights and fonts */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-7xl backdrop-blur-xl bg-gray-800/40 p-8 md:p-14 rounded-3xl shadow-2xl">
          {/* Job Role */}
          <div className="relative w-full md:flex-1">
            <FaBriefcase className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Job Role (e.g. Software Engineer)"
              className="w-full pl-16 pr-6 py-6 rounded-2xl bg-gray-900/70 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-500 text-xl transition"
            />
          </div>

          {/* Hardness Selector */}
          <div className="relative w-full md:w-1/4">
            <MdOutlineBolt className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <select
              className="w-full pl-16 pr-6 py-6 rounded-2xl bg-gray-900/70 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500 text-xl transition appearance-none"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Questions Text Field */}
          <div className="relative w-full md:w-1/4">
            <FaClipboardList className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="No. of Questions"
              className="w-full pl-16 pr-6 py-6 rounded-2xl bg-gray-900/70 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-pink-500 text-xl transition"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#6d28d9" }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-64 bg-gradient-to-r from-indigo-600 to-purple-600 py-6 rounded-2xl font-semibold shadow-lg text-xl"
          >
            Start
          </motion.button>
        </div>
      </section>

      {/* Previous Interviews Section */}
      <section
        id="history"
        className="relative w-full px-8 md:px-24 py-20 bg-gray-950/60 backdrop-blur-lg border-t border-gray-800 z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-14 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-center"
        >
          Previous Interviews
        </motion.h2>

        {/* Grid Layout - larger grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full">
          {[
            "Software Engineer @ Google - Hardness: Hard - 5 Questions",
            "Data Analyst @ Microsoft - Hardness: Medium - 8 Questions",
            "Frontend Dev @ Amazon - Hardness: Medium - 6 Questions",
            "Backend Engineer @ Netflix - Hardness: Hard - 10 Questions",
            "UI/UX Designer @ Adobe - Hardness: Easy - 4 Questions",
            "Data Scientist @ OpenAI - Hardness: Hard - 7 Questions",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.07,
                backgroundColor: "rgba(55,65,81,0.85)",
              }}
              className="p-8 bg-gray-800/70 rounded-3xl shadow-xl cursor-pointer transition backdrop-blur-md text-center text-xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 py-10 text-center text-gray-400 text-base z-10 border-t border-gray-800 w-full">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          PrepWise
        </span>{" "}
        - Your AI Interview Coach 🚀
      </footer>
    </div>
  );
}
