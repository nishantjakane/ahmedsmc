import React from "react";

function Footer(){
    return(
        <footer class="bg-white dark:bg-gray-900" id="footer">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                  <div class="mb-6 md:mb-0">
                      <a href="/ahmedsmc" class="flex items-center">
                          <img src="./assets/logo.png" class="h-12 mr-3" alt="Logo"  />
                          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white montFont">AHMED_SMC</span>
                      </a>
                  </div>
                  <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                      <div>
                          <h2 class="mb-6 text-sm font-semibold mainHeading uppercase dark:text-white montFont">COMPANY</h2>
                          <ul class="text-gray-500 dark:text-gray-400 font-medium">
                              <li class="mb-4">
                                  <a href="https://flowbite.com/" class="hover:underline montFont text-white">About</a>
                              </li>
                              <li>
                                  <a href="https://tailwindcss.com/" class="hover:underline montFont text-white">Testimonials</a>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white montFont mainHeading">Follow us</h2>
                          <ul class="text-gray-500 dark:text-gray-400 font-medium">
                              <li class="mb-4">
                                  <a href="" class="hover:underline montFont text-white">Instagram</a>
                              </li>
                              <li>
                                  <a href="https://twitter.com/ahmed_smc_" class="hover:underline montFont text-white">Twitter</a>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white montFont mainHeading">Legal</h2>
                          <ul class="text-gray-500 dark:text-gray-400 font-medium">
                              <li class="mb-4">
                                  <a href="#" class="hover:underline montFont text-white">Disclaimer</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <div class="sm:flex sm:items-center sm:justify-between">
                  <span class="text-sm text-white sm:text-center dark:text-gray-400 montFont">© 2023 <a href="" class="hover:underline text-white">AHMED_SMC™</a>. All Rights Reserved.
                  </span>
                  <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                      <a href="#" class="text-gray-500 hover:text-white dark:hover:text-white pt-0">
                      <i class="fa fa-instagram"></i>
                          <span class="sr-only">Instagram page</span>
                      </a>
                      <a href="https://twitter.com/ahmed_smc_" class="text-gray-500 hover:text-white dark:hover:text-white">
                      <i class="fa fa-twitter"></i>
                          <span class="sr-only">Twitter page</span>
                      </a>
                  </div>
              </div>
            </div>
        </footer>
        )
}

export default Footer;