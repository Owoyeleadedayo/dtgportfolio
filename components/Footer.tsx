import { Instagram, Mail, MailOpen } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#1A1A1A] gap-3 py-6">
      <div className="flex justify-between items-center px-5 md:px-8 lg:px-25">
        <p className="text-white text-3xl font-bold uppercase">dtg.</p>

        <div className="flex justify-center items-center gap-3">
          <div>
            <a
              href="https://www.instagram.com/dhaniel_thegreat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram color="#D4AF38" className="cursor-pointer" />
            </a>
          </div>
          <div className="w-6 h-6">
            <a
              href="https://www.tiktok.com/dhaniel_thegreat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF38]/80"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
              >
                <title>TikTok</title>
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="mailto:scoutedbydhaniel@gmail.com"
              className="inline-flex items-center"
            >
              <Mail color="#D4AF38" size={28} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gray-300/20 my-2" />
      <p className="text-white text-center font-medium text-sm">
        © All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
