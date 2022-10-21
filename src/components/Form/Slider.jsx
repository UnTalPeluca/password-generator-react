import "../../assets/styles/form/slider/slider.css";
import { useState, useEffect } from "react";
function Slider({ min, max, value, onChange }) {
  const [fill, setFill] = useState(0);
  useEffect(() => {
    let newFill = ((value - min) / (max - min)) * 100; //Inverse Lerp
    setFill(newFill);
  }, [value]);
  return (
    <div className="relative">
      <div
        className="absolute top-0 bottom-0 my-auto bg-neon-green h-2 w-full"
        style={{ width: `${fill}%` }}
      />
      <input
        type="range"
        className="appearance-none w-full h-2 cursor-pointer select-none bg-very-dark-grey"
        smooth="true"
        step="0.1"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
    </div>
  );
}

export default Slider;
