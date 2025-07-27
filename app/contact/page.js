"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <div className="flex-col items-center h-screen w-full overflow-hidden bg-slate-900 text-slate-200 relative">
      <Boxes />
        <div className="absolute inset-0 w-full h-full bg-slate-900 [mask-image:radial-gradient(transparent_20%,white)] pointer-events-none" />
        <div className="flex flex-col items-center h-full">
        <Navbar />
        <main className="flex-grow w-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-400 to-emerald-400 text-transparent bg-clip-text mb-6 z-10">
            Contact Us
          </h1>
          <p className="max-w-2xl text-lg text-slate-300 mb-12 z-10">
            Have questions, suggestions, or need to report a critical issue? Please feel free to reach out to us through any of the channels below. We are committed to improving digital security and value your input.
          </p>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700 flex-1 max-h-32 z-10">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 text-sky-400 mr-4" />
                <div>
                  <h2 className="text-xl font-bold">General Inquiries</h2>
                  <a href="mailto:support@phishshield.dev" className="text-slate-300 hover:text-sky-400 transition-colors">
                    krishajudiya21@gmail.comm
                  </a>
                </div>
              </div>
            </div>

        </main>
        </div>
    </div>
  );
}
