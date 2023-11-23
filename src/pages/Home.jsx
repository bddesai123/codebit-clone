import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="font-Poppins " id="container">
      <Navbar />
      {/* Hero Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="text-center mt-20 lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to Metabit Club
            </h1>
            <p className="mb-8 leading-8 text-xl">
              The decentralized crowdfunding platform that empowers creators and
              entrepreneurs to raise funds for their projects in a transparent,
              secure, and efficient way.
            </p>
            <div className="flex justify-center">
              <a
                href="/login"
                className="flex gap-3 shadow-xl hover:shadow-2xl hover:shadow-pink-900 cursor-pointer text-white font-semibold bg-gradient-to-r from-yellow-600  to-pink-600 px-7 py-3 rounded-lg hover:rounded-full hover:transition hover:duration-300 hover:scale-105 duration-500  hover:from-pink-600 hover:to-yellow-600"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}

      <section>
        {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Title --> */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold underline decoration-pink-600 md:text-5xl">
              Make every step user-centric
            </h2>
            <p className="mb-8 mt-4 max-w-xl text-base text-[#636262] md:mb-12 md:text-lg lg:mb-16">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit amet luctus magna fringilla urna
            </p>
          </div>
          {/* <!-- Features Content --> */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
            {/* <!-- Features Item --> */}
            <div className="grid gap-6 rounded-md bg-gray-200 border border-solid border-[#cdcdcd] p-8 md:p-10">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                alt=""
                className="inline-block h-16"
              />
              <h3 className="text-xl font-semibold">Support</h3>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* <!-- Features Item --> */}
            <div className="grid gap-6 rounded-md bg-gray-200 border border-solid border-[#cdcdcd] p-8 md:p-10">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                alt=""
                className="inline-block h-16"
              />
              <h3 className="text-xl font-semibold">Organise</h3>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* <!-- Features Item --> */}
            <div className="grid gap-6 rounded-md bg-gray-200 border border-solid border-[#cdcdcd] p-8 md:p-10">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                alt=""
                className="inline-block h-16"
              />
              <h3 className="text-xl font-semibold">Flexibility</h3>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* <!-- Features Item --> */}
            <div className="grid gap-6 rounded-md bg-gray-200 border border-solid border-[#cdcdcd] p-8 md:p-10">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                alt=""
                className="inline-block h-16"
              />
              <h3 className="text-xl font-semibold">Speed</h3>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* <!-- Features Item --> */}
            <div className="grid gap-6 rounded-md bg-gray-200 border border-solid border-[#cdcdcd] p-8 md:p-10">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                alt=""
                className="inline-block h-16"
              />
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* <!-- Features Item --> */}
            <div className="grid gap-6 rounded-md bg-gray-200 border border-solid border-[#cdcdcd] p-8 md:p-10">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                alt=""
                className="inline-block h-16"
              />
              <h3 className="text-xl font-semibold">Resource</h3>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW it Works */}
      <section className="py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <h1 className="text-center underline decoration-pink-600 text-3xl font-bold lg:text-4xl">
            How it works
          </h1>
          <p className="font-inter mx-auto mb-12 mt-4 max-w-lg px-5 text-center text-base font-light text-[#71717A]">
            Use premium tailwindcss components to ship your product faster to
            your customers. Build better and faster with Devjoy
          </p>

          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="relative my-8 flex w-full rounded-md lg:mx-8 lg:flex-col">
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200">
                <h2 className="text-3xl font-medium">1</h2>
              </div>
              <div className="ml-6 lg:ml-0">
                <h2 className="mb-5 text-xl font-medium lg:mt-8">
                  Find Component
                </h2>
                <p className="font-inter max-w-md pr-5 text-base text-gray-500">
                  Lorem ipsum dolor sit amet, elit ut aliquam, purus sit lorem
                  ipsum dolor sit amet
                </p>
              </div>
              {/* MOBILE - HOW IT WORKS LINE */}
              <svg
                className="absolute -bottom-[48px] left-[28px] lg:hidden"
                width="12"
                height="70"
                viewBox="0 0 12 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
                  fill="black"
                ></path>
              </svg>
              {/* DESKTOP - HOW IT WORKS LINE */}
              <svg
                className="absolute right-0 top-7 hidden lg:block"
                width="170"
                height="12"
                viewBox="0 0 170 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM169.773 6L164 0.226497L158.227 6L164 11.7735L169.773 6ZM6 7H9.95V5H6V7ZM17.85 7H25.75V5H17.85V7ZM33.65 7H41.55V5H33.65V7ZM49.45 7H57.35V5H49.45V7ZM65.25 7H73.15V5H65.25V7ZM81.05 7H88.95V5H81.05V7ZM96.85 7H104.75V5H96.85V7ZM112.65 7H120.55V5H112.65V7ZM128.45 7H136.35V5H128.45V7ZM144.25 7H152.15V5H144.25V7ZM160.05 7H164V5H160.05V7Z"
                  fill="black"
                />
              </svg>
            </div>
            {/* BLOCK */}
            <div className="relative my-8 flex w-full rounded-md lg:mx-8 lg:flex-col">
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200">
                <h2 className="text-3xl font-medium">2</h2>
              </div>
              <div className="ml-6 lg:ml-0">
                <h2 className="mb-5 text-xl font-medium lg:mt-8">
                  Copy and paste
                </h2>
                <p className="font-inter max-w-md pr-5 text-base text-gray-500">
                  Lorem ipsum dolor sit amet, elit ut aliquam, purus sit lorem
                  ipsum dolor sit amet
                </p>
              </div>
              {/* MOBILE - HOW IT WORKS LINE */}
              <svg
                className="absolute -bottom-[48px] left-[28px] lg:hidden"
                width="12"
                height="70"
                viewBox="0 0 12 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
                  fill="black"
                ></path>
              </svg>
              {/* DESKTOP - HOW IT WORKS LINE */}
              <svg
                className="absolute right-0 top-7 hidden lg:block"
                width="170"
                height="12"
                viewBox="0 0 170 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM169.773 6L164 0.226497L158.227 6L164 11.7735L169.773 6ZM6 7H9.95V5H6V7ZM17.85 7H25.75V5H17.85V7ZM33.65 7H41.55V5H33.65V7ZM49.45 7H57.35V5H49.45V7ZM65.25 7H73.15V5H65.25V7ZM81.05 7H88.95V5H81.05V7ZM96.85 7H104.75V5H96.85V7ZM112.65 7H120.55V5H112.65V7ZM128.45 7H136.35V5H128.45V7ZM144.25 7H152.15V5H144.25V7ZM160.05 7H164V5H160.05V7Z"
                  fill="black"
                />
              </svg>
            </div>
            {/* BLOCK */}
            <div className="relative my-8 flex w-full rounded-md lg:mx-8 lg:flex-col">
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200">
                <h2 className="text-3xl font-medium">3</h2>
              </div>
              <div className="ml-6 lg:ml-0">
                <h2 className="mb-5 text-xl font-medium lg:mt-8">Done!</h2>
                <p className="font-inter max-w-md pr-5 text-base text-gray-500">
                  Lorem ipsum dolor sit amet, elit ut aliquam, purus sit lorem
                  ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutUs />
      <div className="">
        {/* Section Logo Cloud */}
        <section>
          {/* Container */}
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            {/* <!--Title --> */}
            <h5 className="mb-6 text-center underline decoration-pink-600 text-4xl  font-bold md:mb-12">
              Our Partners
            </h5>

            <div className="grid grid-cols-2 items-center justify-center gap-8 rounded-md  p-16 px-8 py-12 sm:grid-cols-3 md:gap-16">
              <div className="flex items-center justify-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fe26718fe228c33ca3b_Microsoft%20Logo.svg"
                  alt=""
                  className="max-w-full items-center justify-center sm:max-w-[80%]"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fe2b505e19a1c8ee724_PayPal%20Logo.svg"
                  alt=""
                  className="max-w-full sm:max-w-[80%]"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fdca5c3b6500a5eb898_Google%20Logo.svg"
                  alt=""
                  className="max-w-full sm:max-w-[80%]"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fdf5ff5f86ee7d119de_Chase%20Logo.svg"
                  alt=""
                  className="max-w-full sm:max-w-[80%]"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fe2a5c3b692285eb8bc_Walmart%20Logo.svg"
                  alt=""
                  className="max-w-full sm:max-w-[80%]"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b40da2bca81dd9374cfbe_Slack%20Logo-2.svg"
                  alt=""
                  className="max-w-full sm:max-w-[80%]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <NewsLetter />

      {/* Footer */}

      <footer className="block">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="flex flex-col items-center">
            <a href="#" className="mb-8 inline-block max-w-full text-black">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94d6f4e6cf96_Group%2047874-3.png"
                alt=""
                className="inline-block max-h-10"
              />
            </a>
            <div className="max-[991px]: text-center font-semibold max-[991px]:py-1">
              <a
                href="#"
                className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]"
              >
                About
              </a>
              <a
                href="#"
                className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]"
              >
                Features
              </a>
              <a
                href="#"
                className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]"
              >
                Works
              </a>
              <a
                href="#"
                className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]"
              >
                Support
              </a>
              <a
                href="#"
                className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]"
              >
                Help
              </a>
            </div>
            <div className="mb-8 mt-8 w-48 [border-bottom:1px_solid_rgb(0,_0,_0)]"></div>
            <div className="mb-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 gap-3">
              <a
                href="#"
                className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
              >
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65ff1579cbd64244573_FacebookLogo.svg"
                  alt=""
                  className="inline-block"
                />
              </a>
              <a
                href="#"
                className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
              >
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65864ee6f4870bbe5cb_InstagramLogo.svg"
                  alt=""
                  className="inline-block"
                />
              </a>
              <a
                href="#"
                className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
              >
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65ab9fdec6c06b596f6_SlackLogo.svg"
                  alt=""
                  className="inline-block"
                />
              </a>
              <a
                href="#"
                className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
              >
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65b64ee6f2f15bbe5e0_TwitterLogo.svg"
                  alt=""
                  className="inline-block"
                />
              </a>
            </div>
            <p className="max-[479px]:text-sm">
              © Copyright 2021. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
