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
        documentURL="https://h1nqc3w0.simplepdf.eu/form/78f5649037515be03e1590c5afff947cf342ef031ac9a3caeed7fa68f54333ef"
      />
    </>
  );
}

export default Resume;
