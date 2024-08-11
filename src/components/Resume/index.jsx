import React from "react";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

// The PDF is displayed when rendering the component

function Resume() {
  return (
    <>
      <br />
      <EmbedPDF
        mode="inline"
        style={{ width: 900, height: 800 }}
        documentURL="https://h1nqc3w0.simplepdf.eu/form/b1edf50328f2bb7c99c76418265e2babd9b5242d216122aa299789e544b61e61"
      />
    </>
  );
}

export default Resume;
