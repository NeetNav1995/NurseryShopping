import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const openPlants = () => {
    navigate("/NurseryShopping/plantsCollection");
  };

  return (
    <>
      <section className="relative min-h-screen bg-cover bg-center abc">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Main content wrapper */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-10 text-white text-center">
          {/* Left Column */}
          <div className="w-full md:w-1/4 p-4 flex flex-col items-center mt-6">
            <h1 className="text-4xl font-bold mb-4">Welcome To</h1>
            <h1 className="text-4xl font-bold mb-4">Paradise Nursery</h1>
            <p className="text-xl mb-4">Where Green Meets Serenity</p>
            <button
              className="bg-green-500 text-xl text-white px-4 py-2 rounded hover:bg-green-600 transition"
              onClick={() => openPlants()}
            >
              Get Started
            </button>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-3/4 md:px-28 px-6 p-4 flex flex-col items-center md:items-start text-left">
            <p className="text-xl mb-4">
              Welcome to Paradise Nursery, where green dreams come to life!
            </p>
            <p className="text-xl mb-4">
              At Paradise Nursery, we believe every plant has a story and a
              place in your life. Whether you're a seasoned gardener or just
              starting your green journey, our nursery is your one-stop
              destination for healthy, vibrant plants and expert advice.
            </p>
            <p className="text-xl mb-4">
              Explore our wide selection of plants, from exotic tropicals to
              hardy perennials. Our knowledgeable staff is here to help you
              choose the perfect plants for your home, garden, or office.
            </p>
            <p className="text-xl mb-4">
              Join us in nurturing nature and creating your own paradise. Visit
              us today and let your green thumb flourish!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
