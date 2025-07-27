"use client";
import React from "react";
import { Boxes } from "./components/ui/background-boxes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!url) return;
    try {
      setLoading(true)
      const response = await fetch("/api/check-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      setResult(data);
      setLoading(false)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const newUrl = e.target.value;
    setUrl(newUrl);

    if (newUrl === "") {
      setResult(null);
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-slate-900 text-slate-200 relative">

      <Boxes />
        <div className="absolute inset-0 w-full h-full bg-slate-900 [mask-image:radial-gradient(transparent_20%,white)] pointer-events-none" />
      <Navbar />

      <main className="flex-grow w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16">
        <div className="text-center">
          <TypeAnimation
            sequence={[
              "Anti-Scam URL Checker",
              2000,
              "Protecting Your Clicks",
              2000,
              "PhishShield",
              3000,
            ]}
            wrapper="h1"
            speed={30}
            className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-sky-400 to-emerald-400 text-transparent bg-clip-text relative z-10"
            repeat={Infinity}
          />
          <p className="mt-4 text-lg relative z-10">
            Stay safe online. <br /> Paste any URL below to instantly check for
            threats.
          </p>
        </div>

        <div className="flex justify-center mt-8 z-10">
          <FontAwesomeIcon
            icon={faGlobe}
            beatFade
            size="6x"
            className="text-[#4266f5]"
          />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="flex flex-col items-center space-y-4 mt-12 z-10"
        >
          <input
            value={url}
            onChange={handleChange}
            type="text"
            placeholder="Enter URL here..."
            className="w-full max-w-lg p-3 border border-blue-300 text-center rounded-md focus:outline-none z-10 bg-slate-800/50 backdrop-blur-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          />

          <button
            type="submit"
            className="py-2 px-7 rounded-md border border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-slate-900 transition duration-300
                      z-10 hover:shadow-xl hover:shadow-sky-500/20"
          >
            {loading ? "Analyzing..." : "Search"} 
          </button>
        </form>

        {result && (
          <div
            className={`relative flex justify-center mt-10 p-4 rounded-md z-10 shadow-xl ${
              result.isSafe
                ? "border border-green-500 bg-green-500/20 shadow-green-500/20"
                : "border border-red-500 bg-red-500/20 shadow-red-500/20"
            }`}
          >
            <p className="relative text-xl font-semibold z-10">{result.message}</p>
          </div>
        )}
      </main>
    </div>
  );
}
