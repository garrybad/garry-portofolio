import React from "react";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import Image from "next/image";
import Sidebar from "../app/components/sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const Home = () => {
  return (
    <>
      <div className="fixed m-5">
        <Sidebar />
      </div>

      <div
        className={`${poppins.className} w-full h-screen flex items-center justify-center bg-[#758694]`}
      >
        <div className="text-center">
          <div className="text-3xl font-bold">
            Hello, my name is Muhammad Garry.
          </div>
          <div className="text-lg">
            I'm a front-end developer with 2 years of experience, building
            responsive websites using Angular, Solid, and React.
          </div>
          <div className="text-lg">
            Check out my latest projects on the portofolio page.
          </div>
          <div className="text-lg">
            Feel free to reach me at garrybad3@gmail.com.
          </div>
        </div>
      </div>

      <div className={`${poppins.className} px-96 py-5`}>
        <div className="text-3xl font-bold mb-3">Front end portfolio</div>
        <div className="text-lg mb-3">
          From Web Components and UI/UX animations to React.JS, Redux, Vue.JS,
          and Node.JS. Check out my latest web software development portfolio
          projects.
        </div>
        <div className="text-xs mb-3">
          Showing all projects. Use the filter to list them by skill or
          technology.
        </div>
        <div className="grid grid-cols-2 gap-10 mb-16">
          <Image
            className="w-full"
            sizes="50%"
            width={0}
            height={0}
            src={`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`}
          ></Image>
          <Image
            className="w-full"
            sizes="50%"
            width={0}
            height={0}
            src={`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`}
          ></Image>
          <Image
            className="w-full"
            sizes="50%"
            width={0}
            height={0}
            src={`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`}
          ></Image>
          <Image
            className="w-full"
            sizes="50%"
            width={0}
            height={0}
            src={`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`}
          ></Image>
          <Image
            className="w-full"
            sizes="50%"
            width={0}
            height={0}
            src={`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`}
          ></Image>
          <Image
            className="w-full"
            sizes="50%"
            width={0}
            height={0}
            src={`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`}
          ></Image>
          <Image
            className="w-full"
            sizes="50%"
            width={0}
            height={0}
            src={`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`}
          ></Image>
          <Image
            className="w-full"
            sizes="50%"
            width={0}
            height={0}
            src={`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`}
          ></Image>
        </div>
        <div className="text-center">
          <div className="font-bold text-lg">Let's talk</div>
          <div>Wanna get in touch or talk about a project?</div>
          <div>Feel free to contact me via email at garrybad3@gmail.com</div>
          <div>or drop a line in the form at the contact page</div>
        </div>
      </div>

      <div className={`${poppins.className} px-96 py-5 bg-[#3C3D37]`}>
        <div className="text-3xl font-bold mb-3">Get in touch</div>
        <div className="mb-2">
          If you wanna get in touch, talk to me about a project collaboration or
          just say hi,
        </div>
        <div className="mb-10">
          fill up the awesome form below or send an email to rafael@caferati.me
          and ~let's talk.
        </div>
        <div className="text-xl font-bold mb-2">Let's get social</div>
        <div>
          Follow my online fan page on Facebook and profiles on Twitter, GitHub
          and Linkedin.
        </div>
      </div>
    </>
  );
};

export default Home;
