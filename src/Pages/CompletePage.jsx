import React from "react";
import Main from "../components/Main.jsx";
import BrankColaboration from "../components/BrankColaboration.jsx";
import WelcomeComp from "../components/WelcomeComp.jsx";
import PowerService from "../components/PowerService/PowerService.jsx";
import RenewableSection from "../components/RenewableSection.jsx";

function CompletePage() {
  return (
    <>
      <Main />
      <BrankColaboration />
      <WelcomeComp />
      <PowerService />
      <RenewableSection />
    </>
  );
}

export default CompletePage;
