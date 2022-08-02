import React, { useState } from "react";
import "./Main.css";
const FileUpload = () => {
  const [imagePreview, setImagePreview] = useState("");
  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.onerror = (error) => {
      console.error(error);
    };
  };
  console.log(imagePreview);
  return (
    <div className="h-full w-full">
      {imagePreview && <img src={imagePreview} alt="meme--icon" />}
      {!imagePreview && (
        <>
          <input
            id="file"
            type="file"
            onChange={handleUpload}
            accept="image/*"
            className="file-input"
          />
          <label className="file-design" htmlFor="file">
            <div className="toFlex">
              <div className="iconPlus">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828579.png"
                  alt="upload-icon"
                />
              </div>
              <h3>UPLOAD IMAGE</h3>
            </div>
          </label>
        </>
      )}
    </div>
  );
};

export default FileUpload;
