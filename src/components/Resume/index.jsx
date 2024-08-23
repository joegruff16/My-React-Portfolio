import React from "react";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";
import { DiBlackberry } from "react-icons/di";
import { BiColor } from "react-icons/bi";

// The PDF is displayed when rendering the component

function Resume() {
  return (
    <>
      <br />
      <EmbedPDF
        mode="inline"
        style={{ width: 800, height: 800 }}
        documentURL="https://h1nqc3w0.simplepdf.eu/form/f91ce012884f9ecf27414942cdcc809fbeb013573b7c890110160cfa61dc2827"
      />
    </>
  );
}

export default Resume;
