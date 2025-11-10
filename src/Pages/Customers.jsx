import React from "react";

const Customers = () => {
  return (
    <div className="w-full h-full">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center pt-6 px-4">
        <h1 className="text-[#51504A] font-bold text-2xl sm:text-3xl md:text-4xl">
          Trusted by more than 2500+ Customers.
        </h1>

        {/* Customer Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-6 w-full max-w-4xl">
          <img
            className="w-20 sm:w-28 md:w-32 object-contain"
            src="https://anandahomes.co.in/wp-content/uploads/2025/02/bay-hills-logo_.png"
            alt="Bay Hills"
          />
          <img
            className="w-20 sm:w-28 md:w-32 object-contain"
            src="https://anandahomes.co.in/wp-content/uploads/2025/01/poetree-logo.png"
            alt="Poetree"
          />
          <img
            className="w-20 sm:w-28 md:w-32 object-contain"
            src="https://anandahomes.co.in/wp-content/uploads/2025/01/drizzle-logo_.png"
            alt="Drizzle"
          />
          <img
            className="w-20 sm:w-28 md:w-32 object-contain"
            src="https://anandahomes.co.in/wp-content/uploads/2025/01/ogzone-heights-logo_.png"
            alt="Ogzone Heights"
          />
          <img
            className="w-20 sm:w-28 md:w-32 object-contain"
            src="https://anandahomes.co.in/wp-content/uploads/2025/01/logo-legacey-final.webp"
            alt="Legacy"
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full flex flex-col md:flex-row p-5 md:p-10 gap-10 md:gap-16 mt-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold p-3 md:p-5 text-[#51504A]">
            Why Choose Us?
          </h1>
          <p className="px-3 md:px-5 text-gray-700 text-sm sm:text-base leading-relaxed">
            Ananda Homes, established in 2007, has grown into a trusted name in
            the real estate industry, powered by a strong technical team of
            well-qualified and experienced engineers. Our team is equipped to
            embrace evolving technologies, ensuring we stay ahead in delivering
            quality homes.
          </p>

          {/* Quality */}
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold px-3 md:px-5">
              Commitment to Quality
            </h2>
            <p className="px-6 md:px-10 mt-2 text-gray-500 text-sm sm:text-base">
              We prioritise reliability and excellence in every construction
              project, utilising the most dependable materials and equipment to
              ensure superior quality.
            </p>
          </div>

          {/* Innovation */}
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold px-3 md:px-5">
              Innovation-Driven Approach
            </h2>
            <p className="px-6 md:px-10 mt-2 text-gray-500 text-sm sm:text-base">
              Our experienced team leverages cutting-edge technology to ensure
              the delivery of superior homes that meet evolving needs.
            </p>
          </div>

          {/* Pricing */}
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold px-3 md:px-5">
              Competitive Pricing
            </h2>
            <p className="px-6 md:px-10 mt-2 text-gray-500 text-sm sm:text-base">
              Our focus is on delivering benevolent constructions at competitive
              prices, ensuring that owning a quality home is within reach for
              all.
            </p>
          </div>
        </div>

        {/* Right Content (Video) */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-full sm:w-4/5 aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/P2H16xTU27M?autoplay=0&rel=0"
              title="Ananda Homes Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
