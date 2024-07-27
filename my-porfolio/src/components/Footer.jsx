import React from "react";

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
