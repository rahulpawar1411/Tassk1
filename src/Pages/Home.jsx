import React from "react";
import Nav from "../Components/Nav";

const Home = () => {
  return (
    <div className="w-full h-[140vh] ">
      <Nav />
      <div className="pl-10 mt-25 ">
        <button className="p-3 bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          Feel The Experience at The Legacey
        </button>
      </div>
      <div className="pl-10 mt-10 text-6xl">
        <h1>
          Beacuse "just a House" <br />
          wasn’t an option.
        </h1>
      </div>
      <div className="pl-10 mt-10 w-[650px] ">
        <p>
          Imagine waking up to breathtaking views, surrounded by opulence that
          whispers of a life well-lived. The Legacey, Ananda Homes crowning
          jewel, invites you to experience a lifestyle that transcends the
          ordinary. Nestled in the vibrant Manikonda, this ultra-modern
          high-rise gated community is not just a residence – it’s a statement
          of success, a haven of comfort, and a legacy you’ll be proud to call
          your own.
        </p>
      </div>
      <div className="pl-10 mt-15 ">
        <button className="px-6 p-2 bg-white text-black rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          GET STARTED{" "}
        </button>
      </div>
    </div>
  );
};

export default Home;
