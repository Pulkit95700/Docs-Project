import React from "react";
import ParaLayout from "./ParaLayout/ParaLayout";

const MainWeb = () => {
  return (
    <div className="flex flex-col gap-8">
      <ParaLayout
        title="Your application never be under threat."
        description="Today sophisticated attackers continue to circumvent perimeter defenses and target the data and applications at the heart of your business. Their goal is to attack the very systems and data that help you to create and keep customers, manage and create intellectual property, and maintain a positive cash flow."
      />

      <ParaLayout description="At A to Z Security we have a proven approach to network security and we provide the best detection and the greatest coverage by identifying malicious content, communications, and behavior across every stage of the attack sequence." />

      <ParaLayout description="We provide you with the latest testing services that covers the following domains:">
        <ul className="list-disc flex flex-col gap-2 ml-6">
          <li>Web Application Security Testing</li>
          <li>Mobile Application Security Testing</li>
          <li>Penetration Testing Service</li>
          <li>Vulnerability Assessment Service</li>
          <li>Source Code Audit Service</li>
          <li>Annual Website Security Management Service</li>
        </ul>
      </ParaLayout>
    </div>
  );
};

export default MainWeb;
