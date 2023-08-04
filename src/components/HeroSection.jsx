import React from "react";

function HeroSection(){
    return(
    <section class=" ">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white montFont">Say goodbye to the fear of risk</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 hindFont">Join us as a trader with 3 years of experience. Our seasoned traders will provide you with valuable insights and strategies to navigate various market conditions. We offer a comprehensive range of educational resources, courses, and webinars to help you grow as a trader. Stay ahead of the game with up-to-date market analysis.

            Receive personalized guidance and support tailored to your goals, risk tolerance, and trading style. Our approach combines time-tested techniques with innovative strategies to give you an edge in the financial landscape. We prioritize your financial security by implementing effective risk management strategies that protect your capital while optimizing potential profits.</p>
            <a href="#" class="heroBtn px-5 py-4 lg:text-xl lg:font-normal inline-flex items-center justify-center lg:px-10 lg:py-5 mr-3 text-base font-medium text-center text-white rounded-lg primaryColor">
                Courses
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class=" heroBtn px-5 py-4 lg:text-xl lg:font-normal inline-flex items-center justify-center lg:px-10 lg:py-5 mr-3 text-base font-medium text-center text-white rounded-lg secondaryColor">
                Testimonials
            </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex heroImg">
            <img src="./assets/heroImg.png" alt="mockup" className=""></img>
        </div>                
    </div>
</section>
    )
}

export default HeroSection;