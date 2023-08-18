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
                          <span class="sr-only">Facebook page</span>
                      </a>
                      <a href="https://twitter.com/ahmed_smc_" class="text-gray-500 hover:text-white dark:hover:text-white">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                            <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                        </svg>
                          <span class="sr-only">Twitter page</span>
                      </a>
                  </div>
              </div>
            </div>
        </footer>
        )
}

export default Footer;