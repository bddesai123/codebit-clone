import React from "react";

const NewsletterSignup = () => {
  return (
    <section className="relative  md:h-96">
      <div className="absolute inset-0 w-full max-w-screen-xl mx-auto flex items-center justify-center">
        <div className="w-full p-6 md:p-10  rounded-md">
          <h3 className="mb-2 text-2xl font-bold md:text-3xl">
            Newsletter Signup
          </h3>
          <p className="mb-6 text-sm text-[#636262] sm:text-base lg:mb-8">
            Egestas consectetur a cras aliquam tincidunt tellus quam. Quis
            faucibus tincidunt etiam sed
          </p>

          <form name="email-form" method="get" className="mb-4 max-w-full">
            <input
              type="email"
              className="block w-full h-12 rounded-md border border-solid border-black px-3 text-sm text-[#333333] mb-4 md:mb-6"
              placeholder="Enter your email"
              required
            />
            <input
              type="submit"
              value="Subscribe"
              className="w-full md:w-36 h-12 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-pink-900 rounded-md bg-gradient-to-r from-yellow-600 to-pink-600 hover:transition hover:duration-300 hover:scale-105 duration-500  hover:from-pink-600 hover:to-yellow-600 px-6 py-2 font-semibold text-white"
            />
          </form>
          <p className="text-sm text-[#636262]">
            Zero spam. Only quality pixels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
