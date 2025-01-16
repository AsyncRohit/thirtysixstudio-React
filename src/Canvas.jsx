import { useEffect, useRef, useState } from "react";
import canvasimages from "./canvasimages";

function Canvas() {
    const [index, setIndex] = useState({value:0})
    const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = canvasimages[index.value];  // Assuming canvasimages is an array of image URLs or paths

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  }, [index]);

  return <canvas 
  ref={canvasRef} 
  id="canvas"
  className="w-[18rem] h-[18rem]"
  ></canvas>; 
}

export default Canvas;
