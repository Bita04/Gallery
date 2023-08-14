import ImageViewer from "../ImageViewer";
import "./shape.css";
import React, { useState } from "react";
import IMG1 from "../../assets/1.jpeg";
import IMG2 from "../../assets/2.jpeg";
import IMG3 from "../../assets/3.jpeg";
import IMG4 from "../../assets/4.jpeg";
import IMG5 from "../../assets/5.jpeg";
import { log } from "console";

const IMAGES = [IMG1, IMG2, IMG3, IMG4, IMG5];

const Shape = () => {
  let count = 0;
  const [imageNumber, setImageNumber] = useState<number>(count);
  const nextimg = () => {
    if (imageNumber < 4) {
      setImageNumber((count) => count + 1);
    }
    if (imageNumber === 4) {
      setImageNumber(0);
    }
  };
  const previousimg = () => {
    if (imageNumber >= 0) {
      setImageNumber((count) => count - 1);
    }
    if (imageNumber === 0) {
      setImageNumber(4);
    }
  };
  // const srcnext =() =>{
  //   if(imageNumber===4){
  //     setImageNumber(0)
  //     return IMAGES[imageNumber]
  //   }
  //   else{
  //     return IMAGES[imageNumber];
  //   }
  // }
  const view = IMAGES.map(() => IMAGES[imageNumber]);
  return (
    <div className="style">
      <ImageViewer src={IMAGES[imageNumber]} />
      <div className="next1">
        {<img src={view[]} alt="img" className="img" />}
      </div>
      <div className="next2">
        <img src={IMAGES[imageNumber + 1]} alt="img" className="img" />
      </div>
      <div className="next3">
        <img src={IMAGES[imageNumber + 2]} alt="img" className="img" />
      </div>
      <div className="next4">
        <img src={IMAGES[imageNumber + 3]} alt="img" className="img" />
      </div>
      <div className="next5">
        <img src={IMAGES[imageNumber + 4]} alt="img" className="img" />
      </div>
      <button className="next" onClick={() => nextimg()}>
        Next
      </button>
      <button className="previous" onClick={() => previousimg()}>
        Previous
      </button>
    </div>
  );
};

export default Shape;
