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
        documentURL="https://h1nqc3w0.simplepdf.eu/form/3f21783097fe71a1b7b336625ee9990811bf799c369f2041ded51a009ca71586"
      />
    </>
  );
}

export default Resume;
