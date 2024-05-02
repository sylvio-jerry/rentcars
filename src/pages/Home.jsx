import React from "react";
import MainHero from "../components/MainHero/MainHero";
import WorkingStep from "../components/WorkingStep/WorkingStep";
import Reason from "../components/Reason/Reason";
import RentalDeals from "../components/RentalDeals/RentalDeals";
import Testimonials from "../components/Testimonials/Testimonials";
import DownloadApp from "../components/DownloadApp/DownloadApp";

function Home() {
  return (
    <div className="overflow-hidden">
      <MainHero />
      <WorkingStep />
      <Reason />
      <RentalDeals />
      <Testimonials />
      <DownloadApp />
    </div>
  );
}

export default Home;
