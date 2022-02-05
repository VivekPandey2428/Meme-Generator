import React from "react";
import './Main.css';
import memedata from "../../memedata";
export default function Main(){
    const [meme,setmeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages,setAllMemeImages]=React.useState(memedata);
    let url;
    function GenerateImage(){
        const Data=memedata.data.memes;
        const randomNumber=Math.floor(Math.random()*Data.length);
        url= Data[randomNumber].url;
        setmeme(item=>{
            return {
                ...item,
                randomImage:url
            }
        })
    }
    function AddtextToMeme(event){
        const {name,value}=event.target;
        setmeme(data=>({
            ...data,
            [name]:value,
        }))
    }
    return(
        <div className="body--container">
             <div className="input--form">
                <input type="text" placeholder="Enter Text 1" onChange={AddtextToMeme} name="topText" value={meme.topText} className="first--input" />
                <input type="text" placeholder="Enter Text 1" onChange={AddtextToMeme} name="bottomText" value={meme.bottomText} className="second--input"/>
                <input type="submit"onClick={GenerateImage} className="submit--button"/>
            </div>
            <div className="Image-value">
                <img src={meme.randomImage} className="meme-img" />
                <h2 className="Top-Text">{meme.topText}</h2>
                <h2 className="Bottom-Text">{meme.bottomText}</h2>
            </div>
        </div>
    )
}