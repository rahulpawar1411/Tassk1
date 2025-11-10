import React from "react";
import Nav from "../Components/Nav";

const Home = () => {
  return (
    <div
      className="w-full min-h-[120%] bg-cover bg-center bg-no-repeat text-white relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')", 
      }}
    >
      
      <div className="absolute inset-0 bg-black/60"></div>

   
      <div className="relative z-10">
        <Nav />

        <div className="px-6 sm:px-10 mt-10 sm:mt-20">
          <button className="transform transition-transform duration-200 hover:scale-110 cursor-pointer px-6 py-2 bg-white text-black rounded-3xl bg-clip-padding backdrop-blur-sm bg-opacity-10 border border-gray-100 text-sm sm:text-base">
            Feel The Experience at The Legacy
          </button>
        </div>

        <div className="px-6 sm:px-10 mt-10 text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          <h1>
            Because “just a house”
            <br className="hidden sm:block" />
            wasn’t an option.
          </h1>
        </div>


        <div className="px-6 sm:px-10 mt-8 max-w-[90%] sm:max-w-[650px]">
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
            Imagine waking up to breathtaking views, surrounded by opulence that
            whispers of a life well-lived.{" "}
            <span className="text-white font-medium">The Legacy</span>, Ananda
            Homes’ crowning jewel, invites you to experience a lifestyle that
            transcends the ordinary. Nestled in the vibrant Manikonda, this
            ultra-modern high-rise gated community is not just a residence – it’s
            a statement of success, a haven of comfort, and a legacy you’ll be
            proud to call your own.
          </p>
        </div>


        <div className="px-6 sm:px-10 mt-10 mb-10">
          <button className="transform transition-transform duration-200 hover:scale-110 cursor-pointer px-6 py-2 bg-white text-black rounded-3xl bg-clip-padding backdrop-blur-sm bg-opacity-10 border border-gray-100 text-sm sm:text-base">
            GET STARTED {" > "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
