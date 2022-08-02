import React, { createRef } from "react";
import "./Main.css";
import memedata from "../../memedata";
import { useScreenshot, createFileName } from "use-react-screenshot";
import FileUpload from "./FileUpload";
export default function Main() {
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot();
  const [meme, setmeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memedata);
  let url;
  function GenerateImage() {
    const Data = memedata.data.memes;
    const randomNumber = Math.floor(Math.random() * Data.length);
    url = Data[randomNumber].url;
    setmeme((item) => {
      return {
        ...item,
        randomImage: url,
      };
    });
  }
  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const getImage = () => {
    takeScreenShot(ref.current).then(download);
  };
  function AddtextToMeme(event) {
    const { name, value } = event.target;

    setmeme((data) => ({
      ...data,
      [name]: value,
    }));
  }
  console.log(image);
  return (
    <div className="body--container">
      <div className="Image-value" ref={ref}>
        <div className="w-full">
          <FileUpload />
        </div>
        <h2 className="Top-Text">{meme.topText}</h2>
        <h2 className="Bottom-Text">{meme.bottomText}</h2>
      </div>
      {!!image && (
        <div className="w-full">
          <img src={image} alt="screenshot" />
        </div>
      )}
      <button className="meme--download" onClick={getImage}>
        Download Meme
      </button>
      <div className="input--form">
        <input
          type="text"
          placeholder="Enter Text 1"
          onChange={AddtextToMeme}
          name="topText"
          value={meme.topText}
          className="first--input"
        />
        <input
          type="text"
          placeholder="Enter Text 1"
          onChange={AddtextToMeme}
          name="bottomText"
          value={meme.bottomText}
          className="second--input"
        />
        <input
          type="submit"
          onClick={GenerateImage}
          value="Change Image"
          className="submit--button"
        />
      </div>
    </div>
  );
}
