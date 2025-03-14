import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const mmToPx = (mm) => mm * 3; // Convert millimeters to pixels (1mm = 3.7795275591px)

const PDFTemplate = ({ name, position, education }) => {
  return (
    <div
      id="pdf-template"
      style={{
        width: "105mm",
        height: "148.5mm",
        padding: "2mm",
        boxSizing: "border-box",
        backgroundColor: "white", // 内容背景颜色
        boxShadow: "inset 0 0 0 2mm lightblue", // 使用 box-shadow 模拟 padding 颜色
      }}
    >
      <h1>{name}</h1>
      <p>{position}</p>
      <h2>Education</h2>
      <ul>
        {education.map((edu) => (
          <li key={edu.id}>
            {edu.school} - {edu.degree}
          </li>
        ))}
      </ul>
    </div>
  );
};

const pdfModel = () => {
  const [name, setName] = useState("John Doe");
  const [position, setPosition] = useState("Software Engineer");
  const [education, setEducation] = useState([
    { id: 1, school: "University A", degree: "BSc" },
    { id: 2, school: "University B", degree: "MSc" },
  ]);
  const [previewMode, setPreviewMode] = useState(false);
  const [imgData, setImgData] = useState("");
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    generatePDF();
  }, []);

  const generatePDF = async () => {
    const pdfTemplate = document.getElementById("pdf-template");
    const canvas = await html2canvas(pdfTemplate, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    setImgData(imgData);
    setCanvasDimensions({ width: canvas.width, height: canvas.height });
    setPreviewMode(true);
  };

  const downloadPDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210; // A4 width in mm
    const imgHeight =
      (canvasDimensions.height * imgWidth) / canvasDimensions.width; // Maintain aspect ratio
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("download.pdf");
    setPreviewMode(false);
  };

  const closePreview = () => {
    setPreviewMode(false);
  };

  return (
    <div>
      <PDFTemplate name={name} position={position} education={education} />
      <button onClick={generatePDF}>Generate PDF</button>
      {/* <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h2>PDF Preview</h2>
          <img
            src={imgData}
            alt="PDF Preview"
            style={{
              width: `${mmToPx(210)}px`,
              height: "auto",
              maxHeight: `${mmToPx(297)}px`,
            }}
          />
          <div>
            <button onClick={downloadPDF}>Download PDF</button>
            <button onClick={closePreview}>Close Preview</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default pdfModel;
