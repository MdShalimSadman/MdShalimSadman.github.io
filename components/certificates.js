import React from "react";

const certificates = [
  {
    institution: "Institution A",
    logoSrc: "/images/institution-a-logo.png",
    certificateName: "Certificate A",
  },
  {
    institution: "Institution B",
    logoSrc: "/images/sunrises.jpg",
    certificateName: "Certificate B",
  },
  {
    institution: "Institution B",
    logoSrc: "/images/institution-b-logo.png",
    certificateName: "Certificate B",
  },
  {
    institution: "Institution B",
    logoSrc: "/images/institution-b-logo.png",
    certificateName: "Certificate B",
  },
  {
    institution: "Institution B",
    logoSrc: "/images/institution-b-logo.png",
    certificateName: "Certificate B",
  },
  // Add more certificate objects as needed
];

const CertificateList = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {certificates.map((certificate, index) => (
        <div
          key={index}
          className="flex flex-col items-center m-4"
        >
          <img
            src={certificate.logoSrc}
            alt={certificate.institution}
            className="w-24 h-24 object-contain"
          />
          <p className="mt-2 text-lg font-bold">{certificate.certificateName}</p>
        </div>
      ))}
    </div>
  );
};

export default CertificateList;
