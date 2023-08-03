import Header from "./Header";
import HeroSection from "./HeroSection";
import WhyUs from "./WhyUs";
import CoursesHome from "./CoursesHome";
import Footer from "./Footer";

function Home(){
    return(
        <div>
            <Header/>
            <HeroSection/>
            <WhyUs/>
            <CoursesHome/>
            <Footer/>
        </div>
    )
}

export default Home;