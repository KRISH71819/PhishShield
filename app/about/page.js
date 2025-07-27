"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faCrosshairs, faEye } from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <div className="h-screen w-full overflow-hidden bg-slate-900 text-slate-200 relative">
      <Boxes />
        <div className="absolute inset-0 w-full h-full bg-slate-900 [mask-image:radial-gradient(transparent_20%,white)] pointer-events-none" />

      <div className="flex flex-col items-center h-full">
        <Navbar />
        <main className="flex-grow w-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-400 to-emerald-400 text-transparent bg-clip-text mb-6 z-10">
            About PhishShield
          </h1>
          <p className="max-w-3xl text-lg text-slate-300 mb-12 z-10">
            PhishShield is a next-generation threat analysis platform designed to protect you from the ever-evolving dangers of the digital world. We leverage cutting-edge API technology to provide real-time analysis of URLs, detecting phishing attempts, malware, and other online scams before they can harm you.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
              <FontAwesomeIcon icon={faShieldHalved} className="h-10 w-10 text-sky-400 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <p className="text-slate-400">
                To empower every internet user with the tools and knowledge to navigate the web safely and confidently.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
              <FontAwesomeIcon icon={faCrosshairs} className="h-10 w-10 text-emerald-400 mb-4" />
              <h2 className="text-2xl font-bold mb-2">How It Works</h2>
              <p className="text-slate-400">
                Our system submits your entered URL to a global network of security vendors for instant analysis, checking it against billions of known threats in seconds.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
              <FontAwesomeIcon icon={faEye} className="h-10 w-10 text-violet-400 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
              <p className="text-slate-400">
                To create a safer digital ecosystem where individuals and organizations are shielded from the financial and personal damages caused by online fraud.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
