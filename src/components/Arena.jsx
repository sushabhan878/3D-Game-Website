import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

const Arena = () => {
  return (
    <div className="md:min-h-[90%] p-0 lg:p-8 md:mt-0 mt-60">
      {/* Section Title */}
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl tracking-widest font-bold mb-28"
          style={{
            textShadow:
              "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(167, 139, 250, 0.5)",
          }}
        >
          Arena
        </h1>
      </div>

      {/* Main Grid Container */}
      <div className="lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6 md:col-span-1">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105">
            <img
              src="/images/bento-card1.png"
              alt="Background Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black/70 h-16 flex items-center justify-center text-2xl font-bold text-white hover:text-yellow-400 transition-all duration-300">
              <IoLogoGooglePlaystore size={24} className="mr-2" />
              NFT STORE
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4.5/4] transform transition-transform duration-300 hover:scale-105">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/videos/bento-card2.mp4"
            ></video>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Top 3 Video Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Card 3 */}
            <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src="/videos/bento-card3.mp4"
              ></video>
              <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl text-white">
                Scoriox
              </h1>
            </div>

            {/* Card 4 */}
            <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src="/videos/bento-card4.mp4"
              ></video>
              <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl text-white">
                Floralynx
              </h1>
            </div>

            {/* Card 5 */}
            <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src="/videos/bento-card5.mp4"
              ></video>
              <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl text-white">
                Titanor
              </h1>
            </div>
          </div>

          {/* Bottom Image Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[16/9] transform transition-transform duration-300 hover:scale-[1.02]">
            <img
              src="/images/bento-card5.png"
              alt="Card image"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-0 w-full bg-black/70 h-16 flex items-center justify-center text-2xl font-bold text-white hover:text-yellow-400 transition-all duration-300">
              <FaExternalLinkAlt size={24} className="mr-2" />
              Buy Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arena;
