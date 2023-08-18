import Footer from "./Footer";
import Header from "./Header";
import Signals from "./Signals";
import "./about.css"

function About(){
    return(
        <div>
            <Header/>
            <div>
                <section class="bgColor dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
        <h4></h4>
        <ul className="list-disc max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        <li>Hi there! My name is Ahmed, and I am a professional ICT trader with a focus on technical analysis, specifically within Forex pairs. I believe that trading is one of the most worthwhile things in the world, and I have been able to earn significant profits by applying my skills in this area.</li>
            <li>One of the main reasons I prefer trading on an ICT basis is that it is the most beneficial way to earn money. I have also found that risk management is an essential part of my success. I limit my trading risk to just 1%, which helps to preserve my capital and minimize the impact of any losses.</li>
            <li>I have achieved a significant milestone for any trader by passing a 200K funded account. Although I have used SMC trading in the past, I switched to ICT because it was more reliable and in-depth. I have found that ICT offers a lot of adaptability and flexibility, which makes it easy to make changes to my trading strategies as needed.</li>
            <li>Regarding my trading style, I use a combination of day trading and swing trading. Day trading allows me to take advantage of short-term market movements, while swing trading gives me the opportunity to capture longer-term trends. By using a combination of both, I can maximize my profits while minimizing my risk.</li>
            <li>In summary, I am a professional trader with a focus on ICT and technical analysis. I use risk management strategies to preserve my capital, and I have passed a 200K funded account. I prefer ICT trading because it is reliable and adaptive, and I use a combination of day trading and swing trading to maximize my profits.</li>
        </ul>
            <p class="">
            </p>
        </div>
                <div class="lg:mt-0 lg:col-span-5 lg:flex">
                <img src="./assets/aboutImg3.png" alt="mockup" className="aboutImg"></img>
            </div>                
            </div>
            </section>
            </div>
            <Signals/>
            <Footer/>
        </div>
    )
}

export default About;