import React from "react";

const Customers = () => {
  return (
    <div className="w-full h-full ">
      <div className="flex justify-center items-center flex-col pt-6 text-4xl">
        <h1 className="text-[#51504A] font-bold ">
          Trusted by more than 2500+ Customers.
        </h1>
        <div className="w-[150px] h-[150px] flex justify-center items-center gap-6 mt-2">
          <img
            src="https://anandahomes.co.in/wp-content/uploads/2025/02/bay-hills-logo_.png"
            alt=""
          />
          <img
            src="https://anandahomes.co.in/wp-content/uploads/2025/01/poetree-logo.png"
            alt=""
          />
          <img
            src="https://anandahomes.co.in/wp-content/uploads/2025/01/drizzle-logo_.png"
            alt=""
          />
          <img
            src="https://anandahomes.co.in/wp-content/uploads/2025/01/ogzone-heights-logo_.png"
            alt=""
          />
          <img
            src="https://anandahomes.co.in/wp-content/uploads/2025/01/logo-legacey-final.webp"
            alt=""
          />
        </div>
      </div>
      <div className=" w-full h-full flex ">
        <div className="w-[50%] h-full  ">
          <h1 className=" text-4xl p-5">WHy Choose us?</h1>
          <p className="px-5">
            Ananda Homes, established in 2007, has grown into a trusted name in
            the real estate industry, powered by a strong technical team of
            well-qualified and experienced engineers. Our team is equipped to
            embrace evolving technologies, ensuring we stay ahead in delivering
            quality homes.
          </p>


          <div className="flex justify-strat items-start ">
            <svg className="w-7 m-7" aria-hidden="true" class="e-font-icon-svg e-fas-shield-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path></svg>
           <h1 className="-ml-4 text-4xl p-5">Commitment to Quality</h1>
          </div>
          <p className="px-10 -mt-5 text-gray-500">
            We prioritise reliability and excellence in every construction project, utilising the most dependable materials and equipment to ensure superior quality .
          </p> 

        </div>
        <div className="w-[50%] h-full  flex justify-center items-center">
          <div className="w-4/5 h-4/5 bg-black rounded-2xl">
          <h1 className="text-gray-700 p-5">video not found!</h1>
          <video alt='video not found' src=""></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
