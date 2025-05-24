import { footer } from "framer-motion/client";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between lg:mt-[15%] mt-[25%] py-8 lg:px-32 md:px-16 px-8 border-t-[0.3px] border-[#babaff] gap-4">
      <img className="h-10" src="\images\illu-text.png" alt="Illu text logo" />
      <img
        src="\images\illu-logo.png"
        alt="Illu logo"
        className="h-16 hidden md:inline"
      />

      <div className="flex gap-4">
        <a
          className="md:text-3xl text-2xl hover:text-violet-600 duration-300"
          href="#"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          className="md:text-3xl text-2xl hover:text-violet-600 duration-300"
          href="#"
        >
          <FaYoutube size={24} />
        </a>
        <a
          className="md:text-3xl text-2xl hover:text-violet-600 duration-300"
          href="#"
        >
          <FaDiscord size={24} />
        </a>
        <a
          className="md:text-3xl text-2xl hover:text-violet-600 duration-300"
          href="#"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
