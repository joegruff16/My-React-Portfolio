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
        documentURL="https://h1nqc3w0.simplepdf.eu/form/8c611335ab46dac9d2d2a1dc884d288e000e8c9564e28e7eec81f6b6b35eb7c8"
      />
    </>
  );
}

export default Resume;
