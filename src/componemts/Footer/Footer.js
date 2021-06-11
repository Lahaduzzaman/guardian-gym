import React from "react";


const Footer = () => {
  return (
    <div>
      <footer class="relative bg-blue-500 pt-8 pb-6">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0px)" }}
        >
        </div>
        <div class="container mx-auto px-4">
          <hr class="my-6 border-gray-400" />
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-gray-600 font-semibold py-1">
                © Copyright Guardian Gym <span>{new Date().getFullYear()}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
