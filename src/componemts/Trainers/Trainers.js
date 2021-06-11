import React from "react";


const Trainers = () => {
  return (
    <div>
      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold auto">
                Meet Our Trainers
              </h2>
              <p class="text-lg leading-relaxed m-4">
                Our team of highly trained and certified fitness instructors will help you set your goals and provide you with workouts specifically designed to help you achieve that goals.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div
              class="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
              data-aos="flip-right"
            >
              <div class="px-6">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=60"
                  class="shadow-lg rounded max-w-full mx-auto"
                  style={{ maxWidth: "250px" }}
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Frank Stone</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Trainer
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div
              class="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
              data-aos="flip-right"
            >
              <div class="px-6">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  class="shadow-lg rounded max-w-full mx-auto"
                  style={{ maxWidth: "250px" }}
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Mary Grey</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Trainer
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div
              class="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
              data-aos="flip-right"
            >
              <div class="px-6">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1606889463862-a8fc57a706ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                  class="shadow-lg rounded max-w-full mx-auto"
                  style={{ maxWidth: "250px" }}
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Hank Wilson</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Trainer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
