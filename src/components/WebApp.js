import React from "react";
import ParaLayout from "./ParaLayout/ParaLayout";
import Image from "../assets/WebApplication.png"

const WebApp = () => {
  return (
    <div className="flex flex-col">
      <ParaLayout
        title="Web Application Security Testing Service"
        description="Application Security Testing Service is meant to discover security vulnerabilities in your web site from an attacker's perspective. At A to Z Security, Our inhouse team of web security experts will analyze your web site with web security scanners, custom security tools, and comprehensive manual inspection to identify each potential point of intrusion into your web site."
        imagePos="right"
        image={Image}
      />
        <ParaLayout
        title="Web Application Security Testing Service"
        description="Application Security Testing Service is meant to discover security vulnerabilities in your web site from an attacker's perspective. At A to Z Security, Our inhouse team of web security experts will analyze your web site with web security scanners, custom security tools, and comprehensive manual inspection to identify each potential point of intrusion into your web site."
        imagePos="right"
        image={Image}
      />
    </div>
  );
};

export default WebApp;
