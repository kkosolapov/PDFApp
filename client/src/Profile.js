import React, { useRef } from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
  const navigate = useNavigate();
  const location = useLocation();

  const fileInputRef = useRef(null);
  const [pdfFile, setPdfFile] = useState(null);

  const username = location.state?.username;

  const logout = () => {
    navigate('/');
  };

  const uploadPDF = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === 'application/pdf') {
        const fileURL = URL.createObjectURL(file);
        setPdfFile(fileURL);
      } else {
        alert('Please upload a valid PDF file.');
      }
    }
  };

  const closePDF = () => {
    setPdfFile(null);
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center bg-dark text-white" style={{ minHeight: "100vh" }}>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-white">
        <h1 className="mb-3">Привіт, {username}!</h1>
        <button className="btn btn-primary mb-3" onClick={logout}>
          Вийти
        </button>
      </div>

      <div
        className="container-fluid bg-dark d-flex flex-column justify-content-center align-items-center"
        style={{ paddingBottom: "200px" }}
      >
        <button className="btn btn-primary mt-5" onClick={uploadPDF}>
          Завантажити PDF
        </button>
        <input
          type="file"
          accept="application/pdf"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>

      {pdfFile && (
        <div className="container-fluid d-flex flex-column bg-dark justify-content-center w-75">
          <iframe
            src={pdfFile}
            title="PDF Viewer"
            width="100%"
            height="500px"
            className="border rounded"
            style={{ backgroundColor: "#1c1c1c" }}
          />
          <button
            className="btn btn-danger mt-2"
            onClick={closePDF}
            style={{ alignSelf: "center" }}
          >
            Закрити PDF
          </button>
        </div>
      )}
    </div>

)}

export default Profile;
