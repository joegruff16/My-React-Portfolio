import React from "react";
// import react icons for social media portion of footer
// import { FiGithub, FiLinkedin, FiSubstack } from "react-icons/fi";

const footerLinks = [{}];
function Footer() {
  return (
    <div className="text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Joseph Ruff. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
