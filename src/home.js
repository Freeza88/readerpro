import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const images = [
    { id: 1, src: "image.png" },
    { id: 2, src: "image1.png" },
    { id: 3, src: "image2.png"},
    { id: 3, src: "image3.png" },
  ];

  return (
      
        <div className="image-list">
            <br />
          {images.map((image) => (
            <div key={image.id} className="image-container">
              <img src={image.src} alt="Image" className="image" />
            </div>
          ))}
        </div>

  );
}

export default App;