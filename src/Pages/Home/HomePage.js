import { Hero } from "./components/Hero";
import { Cultivars } from "./components/Cultivars";
import { FarmGalery } from "./components/FarmGalery";
import { Testimonials } from "../ContactUs/components/Testimonials";
import { ScrollToTopButton } from "../../ScrollButton/ScrollToTopButton";

export const HomePage = () => {
    return (
        <>
            <Hero />
            <main>
                <Cultivars />
                <FarmGalery />
                <Testimonials />
                <ScrollToTopButton/>
            </main>
        </>
    )
}
