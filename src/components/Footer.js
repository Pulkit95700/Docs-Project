import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../assets/logocopy.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="bg-white rounded-lg shadow border-t">
      <div class="w-full md:py-8">
        <div class="md:px-16 sm:flex sm:items-center sm:justify-between text-center ">
          <div className="flex flex-col md:flex-row items-center md:items-start pt-4 md:pt-0">
            <img src={LogoImg} class="mr-3 w-12 " alt="Flowbite Logo" />
            <div className="flex gap-3 flex-col items-center md:items-start">
              <Link
                to={"/"}
                class="flex flex-col sm:flex-row sm:gap-0 items-center sm:mb-0 md:py-auto w-full sm:w-auto justify-center sm:justify-start"
              >
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  A TO Z Security
                </span>
              </Link>

              <p class="text-sm text-gray-500 dark:text-gray-400 font-semibold flex gap-2">
                <span className="font-semibold hidden md:block">Email:</span>{" "}
                AtoZSec11@gmail.com
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400 font-semibold flex gap-2">
                <span className="font-semibold hidden md:block">Contact:</span> 9538544507
              </p>
            </div>
          </div>
          <div class="flex flex-col md:w-auto w-full items-center mt-4 md:mt-0 sm:flex-row sm:gap-8 gap-4 justify-center">
            <ul class="flex w-full  flex-wrap self-start  items-center text-lg mb-6 font-medium text-gray-500 sm:mb-0 dark:text-gray-400 sm:w-auto justify-center sm:justify-start">
              <li>
                <Link to={"/about"} class="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" class="mr-4 hover:underline md:mr-6">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" class="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
        <div class="flex flex-col items-center justify-center my-6 md:flex-row ">
          <div class="flex flex-wrap justify-center md:order-2">
            <a
              href="https://www.facebook.com/atozsecurity"
              class="mx-3 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
              aria-label="Facebook"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/atozsecurity/"
              class="mx-3 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
              aria-label="Instagram"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com/atozsecurity"
              class="mx-3 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
              aria-label="Twitter"
            >
              <AiOutlineTwitter className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/atozsecurity/"
              class="mx-3 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
          </div>
        </div>

        <span class="block text-sm text-gray-500 sm:text-center mb-4 sm:mb-0 dark:text-gray-400 text-center">
          © 2023{" "}
          <Link to="/" class="hover:underline">
            A To Z Security™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
