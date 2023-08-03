import React from "react";
import "./home.css"

function WhyUs(){
    return(
    <div class="p-10 text-gray-600"> 
	<h1 class="mb-8 text-center lg:text-4xl font-bold text-white whyUsHeading text-2xl py-6">Why Choose Us?</h1>

	<ul class="grid place-content-center sm:grid-cols-2 gap-8 justify-center lg:px-96 text-center">
		<li class="flex">
			<div class="px-4 lg:text-5xl font-extralight text-white whyUsText text-2xl">01.</div>
			<div>
				<p class="max-w-xs py-2 lg:text-xl  whyUsText">You can join us because we are 3 years experienced trader we have our own session of 
                trading our seasoned traders have successfully navigated various market conditions and can provide invaluable insights and strategies..</p>
			</div>
		</li>
		<li class="flex">
			<div class="px-4 lg:text-5xl font-extralight text-white whyUsText text-2xl">02.</div>
			<div>
				<p class="max-w-xs py-2 lg:text-xl 0 whyUsText">We provide education too :: We prioritize your growth as a trader. Gain access to our comprehensive educational 
                resources, courses, and webinars, empowering you to make well-informed trading decisions &provide real-time market analysis.
				</p>
			</div>
		</li>
		<li class="flex">
			<div class="px-4 lg:text-5xl font-extralight text-white whyUsText text-2xl">03.</div>
			<div>
				<p class="max-w-xs py-2 lg:text-xl  whyUsText ">We recognize that every trader is unique. Receive personalized guidance and support that aligns with your goals, risk tolerance, and preferred trading style.
				</p>
			</div>
		</li>
		<li class="flex">
			<div class="px-4 lg:text-5xl font-extralight text-white whyUsText text-2xl">04.</div>
			<div>
				<p class="max-w-xs py-2 lg:text-xl  whyUsText">Our trading approach combines traditional techniques 
                with innovative strategies, giving you an edge in the ever-evolving financial landscape.
				</p>
			</div>
		</li>
	</ul>
</div>
    )
}

export default WhyUs