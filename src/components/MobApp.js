import React from "react";
import ParaLayout from "./ParaLayout/ParaLayout";
import Image from "../assets/MobileApplication.png";
const MobApp = () => {
  return (
    <div>
      <ParaLayout
        title="Mobile Application Security Testing Service"
        description="A to Z Security’s Mobile App Security Testing service provides a detailed security analysis of your mobile app.Gartner CIO survey believes mobile technology will remain a disruptive force for the next 10 years.90% of the top mobile apps have access to local files that can contain sensitive customer data, corporate intellectual property, and personally identifiable information.mobi A to Z Security follows these steps to reduce the mobile risk."
        image={Image}
        imagePos="right"
      />
    </div>
  );
};

export default MobApp;
