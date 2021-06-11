import React from "react";


const About = () => {
  return (
    <div>
      <section id="about" class="relative py-20 bg-blue-600 text-white">
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div
              class="w-full md:w-4/12 ml-auto mr-auto px-4"
              data-aos="fade-right"
            >
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1600026453346-a44501602a02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80"
              />
            </div>
            <div
              class="w-full md:w-5/12 ml-auto mr-auto px-4"
              data-aos="fade-left"
            >
              <div class="md:pr-12">
                <small class="text-orange-500 text-4xl uppercase font-bold">Our Facility</small>
                <p class="mt-4 text-lg leading-relaxed">Guardian Gym is conceived as a means to the end. Our coaches have experience in training professionals in a variety of demanding sports and occupations including hunting guides, mountain guides, freeskiers, climbers, military personnel, firefighters.
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span class="font-semibold inline-block py-3 mr-3 text-orange-500">
                          <i class="fas fa-dumbbell fa-2x"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-xl">
                          {"* The latest & greatest gym equipment"}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span class="font-semibold inline-block py-3 mr-3 text-orange-500">
                          <i class="fas fa-hard-hat fa-2x"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-xl">
                          * Nutritional guidance & support
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span class="font-semibold inline-block py-3 mr-3 text-orange-500">
                          <i class="fas fa-users fa-2x"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-xl">* 3 professional trainers</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span class="font-semibold inline-block py-3 mr-3 text-orange-500">
                          <i class="fas fa-users fa-2x"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-xl">* Dedicated children's area</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span class="font-semibold inline-block py-3 mr-3 text-orange-500">
                          <i class="fas fa-hard-hat fa-2x"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-xl">
                          * 45 sets of rings
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
