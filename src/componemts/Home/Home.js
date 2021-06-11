import React from "react";


const Home = () => {
  return (
    <div>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "97vh" }}
      >
        <div
          class="absolute top-0 w-full h-full bg-top bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542766788-a2f588f447ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4955&q=80')",
          }}
        ></div>
        <div class="container relative mx-auto" data-aos="fade-in">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 class="text-blue-600 font-semibold text-3xl">
                  Gear <span class="text-blue-600">Up</span>
                </h1>
                <p class="mt-4 text-lg text-black-300">
                  Welcome to Guardian Gym. Guardian Gym is a perfect place to start your healthy life, get fit, and become stronger in a friendly and fun atmosphere. We welcome all ages and fitness levels, be you a newcomer or a professional.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px", transform: "translateZ(0px)" }}
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
