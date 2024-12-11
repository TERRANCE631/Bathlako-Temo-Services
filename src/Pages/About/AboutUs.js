import { AboutUshero } from "./components/AboutUshero";
import { YouTube } from "./components/YouTube";
import { CompanyImpact } from "./components/CompanyImpact";
import { InserviceTrainingStudents } from "./components/InserviceTrainingStudents";
import { MeetTheTeam } from "./components/MeetTheTeam";
import { ScrollToTopButton } from "../../ScrollButton/ScrollToTopButton";
import { DecorativeBanner } from "../ContactUs/components/DecorativeBanner";

export const AboutUs = () => {

  return (
    <>
      <AboutUshero />
      <main>
        <br /><br />
        <DecorativeBanner />
        <YouTube />
        <br />
        <CompanyImpact />
        <br /><br />
        <InserviceTrainingStudents />
        <br />
        <MeetTheTeam />
        <ScrollToTopButton />
      </main>
    </>
  )
}

