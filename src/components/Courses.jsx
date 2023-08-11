import Header from "./Header";
import Footer from "./Footer"
import CoursesHome from "./CoursesHome"
import Signals from "./Signals";

function Courses(){
    return(
        <div>
            <Header/>
    <section class="py-10 bgColor justify-center">
	<h1 class="mb-8 text-center lg:text-4xl font-bold text-white whyUsHeading text-2xl py-6">What we offer?</h1>
  <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
    <article class="rounded-xl primaryColor p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="./assets/courses1.png" alt="Courses" />
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-white montFont font-bold">1:1 Class 1 hour</h2>
          <p class="mt-1 text-sm text-white montFont">With us for basics</p>

          <div class="mt-3 flex items-end justify-between">
              <p class="text-lg font-bold text-white montFont">$40</p>

            <div class="flex items-center space-x-1.5 rounded-lg accentColor px-4 py-1.5 text-white duration-100 accentColor">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>

              <button class="text-sm accentColor montFont">Book now</button>
            </div>
          </div>
        </div>
      </a>
    </article>
    <article class="rounded-xl primaryColor p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="./assets/courses2.png" alt="Courses" />
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-white montFont font-bold">1:1 Class 2 hour</h2>
          <p class="mt-1 text-sm text-white montFont">With us for basics</p>

          <div class="mt-3 flex items-end justify-between">
              <p class="text-lg font-bold text-white montFont">$60</p>

            <div class="flex items-center space-x-1.5 rounded-lg accentColor px-4 py-1.5 text-white duration-100 accentColor">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>

              <button class="text-sm accentColor montFont">Book now</button>
            </div>
          </div>
        </div>
      </a>
    </article>
    <article class="rounded-xl primaryColor p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="./assets/courses3.png" alt="Banner" />
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-white montFont font-bold">1:1 Full Mentorship from scratch</h2>
          <p class="mt-1 text-sm text-white montFont">From beginner to advanced trader</p>

          <div class="mt-3 flex items-end justify-between">
              <p class="text-lg font-bold text-white montFont">$599</p>

            <div class="flex items-center space-x-1.5 rounded-lg accentColor px-4 py-1.5 text-white duration-100 accentColor">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>

              <button class="text-sm accentColor montFont">Book now</button>
            </div>
          </div>
        </div>
      </a>
    </article>
    <article class="rounded-xl primaryColor p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="./assets/courses3.png" alt="Banner" />
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-white montFont font-bold">1:1 Full Mentorship from scratch</h2>
          <p class="mt-1 text-sm text-white montFont">From beginner to advanced trader</p>

          <div class="mt-3 flex items-end justify-between">
              <p class="text-lg font-bold text-white montFont">$599</p>

            <div class="flex items-center space-x-1.5 rounded-lg accentColor px-4 py-1.5 text-white duration-100 accentColor">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>

              <button class="text-sm accentColor montFont">Book now</button>
            </div>
          </div>
        </div>
      </a>
    </article>
    </div>
</section>
            <CoursesHome/>
            <Footer/>
        </div>
    )
}

export default Courses;