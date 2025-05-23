import React, { useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

// Reusable stat bar component
const StatBar = ({ label, value }) => (
  <div className="flex items-center">
    <span className="w-24 text-gray-400">{label}</span>
    <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-violet-600 to-white"
        style={{ width: `${value}%` }}
      ></div>
    </div>
    <span className="ml-2">{value}</span>
  </div>
);

const Characters = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("VIKI");

  const Avatar = {
    VIKI: {
      name: "VIKI",
      power: 75,
      stable: 95,
      penetration: 30,
      portable: 80,
      stars: 3,
    },
    EVA: {
      name: "EVA",
      power: 90,
      stable: 80,
      penetration: 70,
      portable: 60,
      stars: 4,
    },
  };

  const currentAvatar = Avatar[selectedAvatar];

  return (
    <div className="relative w-full h-screen overflow-hidden mb-[10%]">
      {/* section title */}
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest md:-mb-14 mb-8"
          style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.7)" }}
        >
          FIGHTERS
        </h1>
      </div>

      {/* Main content area */}
      <div className="relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4">
        {/* Left section */}
        <div className="w-full md:w-2/4 flex flex-col md:ml-10">
          {/* Avatar info card */}
          <div className="bg-gray-900/80 rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)] backdrop-blur-sm">
            <h1 className="text-2xl font-semibold mb-2">
              {currentAvatar.name}
            </h1>

            {/* Stat bars */}
            <div className="space-y-3 mb-16">
              <StatBar label="Power" value={currentAvatar.power} />
              <StatBar label="Stable" value={currentAvatar.stable} />
              <StatBar label="Penetration" value={currentAvatar.penetration} />
              <StatBar label="Portable" value={currentAvatar.portable} />
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300">
                Proficient
              </button>
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300">
                Redemption
              </button>
            </div>
          </div>

          {/* Avatar Selection Grid */}
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(Avatar).map((key) => {
              const avatar = Avatar[key];
              return (
                <div
                  key={key}
                  className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300"
                  onClick={() => setSelectedAvatar(key)}
                >
                  <div className="text-lg mb-2">{avatar.name}</div>
                  <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                    <img
                      src={`public/images/${avatar.name}.png`}
                      alt={`${avatar.name} Img`}
                    />
                  </div>
                  <div className="flex gap-3">
                    {[...Array(avatar.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-violet-400 text-violet-500"
                      />
                    ))}
                  </div>

                  {selectedAvatar === avatar.name && (
                    <div className="absolute inset-0 border-2 rounded-lg pointer-events-none"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side: Animated image section */}
        <div className="relative md:w-2/4 w-full md:h-full h-80 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedAvatar}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentAvatar.name === "EVA" ? (
                <Spline scene="https://prod.spline.design/c4GF0b8LRzoyPg8L/scene.splinecode" />
              ) : (
                <Spline scene="https://prod.spline.design/y9gTL63pX6haBMLX/scene.splinecode" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Characters;
