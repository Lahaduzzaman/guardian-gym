import React from "react";


const Contact = () => {
  return (
    <div>
      <section class="pb-20 relative block bg-green-600 text-white">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0px)" }}
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
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white uppercase">
                Contact Us
              </h2>
              <p class="text-lg leading-relaxed mt-4 mb-4">
                Contact us to ask any questions, aquire a membership, talk to
                our trainers or anything else
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="relative block py-24 lg:pt-0 bg-green-600">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
                data-aos="fade-up-right"
              >
                <div class="flex-auto p-5 lg:p-10 bg-orange-500 text-gray-900">
                  <h4 class="text-2xl font-semibold">Need Assistance?</h4>
                  <p class="leading-relaxed mt-1 mb-4">
                    Fill out this form and our consultant will get in touch with you to answer your questions or schedule a visit.
                  </p>
                  <div class="relative w-full mb-3 mt-8">
                    <label
                      class="block uppercase text-blue-500 font-bold mb-2"
                      for="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 bg-white rounded text-black shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Full Name"
                      style={{ transition: "all 0.15s ease 0s" }}
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blue-500 font-bold mb-2"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      class="px-3 py-3 placeholder-gray-400 bg-white rounded text-black shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Email"
                      style={{ transition: "all 0.15s ease 0s" }}
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blue-500 font-bold mb-2"
                      for="message"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      class="px-3 py-3 placeholder-gray-400 bg-white rounded text-black shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Type a message..."
                    ></textarea>
                  </div>
                  <div class="text-center mt-6">
                    <button
                      class="bg-blue-900 text-green active:bg-gray-700 text-black-400 font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all 0.15s ease 0s" }}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
