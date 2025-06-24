import React from "react";

const LandingPage = () => {
  //   const navigate = useNavigate();

  //   const handleLogin = () => {
  //     navigate("/login");
  //   };

  //   const handleRegister = () => {
  //     navigate("/register");
  //   };

  return (
    <div className="landing-page h-screen overlay">
      <div className="relative flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/4 p-4 justify-center items-center flex flex-col">
          <h1 className="text-white text-4xl font-bold mb-4">Welcome To</h1>
          <h1 className=" heading-with-line text-white text-4xl font-bold mb-4">
            Paradise Nursery
          </h1>
          <p className=" text-xl text-white mb-4">Where Green Meets Serenity</p>
          <button className="bg-green-500 text-xl text-white px-4 py-2 rounded mr-2">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-3/4 px-28 justify-center items-center flex flex-col">
          <p className="text-xl text-white mb-4">
            Welcome to Paradise Nursery, where green dreams come to life!
          </p>
          <p className="text-xl text-white mb-4">
            At Paradise Nursery, we believe every plant has a story and a place
            in your life. Whether you're a seasoned gardener or just starting
            your green journey, our nursery is your one-stop destination for
            healthy, vibrant plants and expert advice.
          </p>
          <p className="text-xl text-white mb-4">
            Explore our wide selection of plants, from exotic tropicals to hardy
            perennials. Our knowledgeable staff is here to help you choose the
            perfect plants for your home, garden, or office.
          </p>
          <p className="text-xl text-white mb-4">
            Join us in nurturing nature and creating your own paradise. Visit us
            today and let your green thumb flourish!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
