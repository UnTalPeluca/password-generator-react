import "../../assets/styles/form/slider/slider.css";

function Slider({ min, max, value, onChange }) {
  const change = (e) => {
    onChange(e);
  };
  return (
    <input
      type="range"
      className="appearance-none w-full h-2 cursor-pointer select-none"
      smooth="true"
      step="0.1"
      value={value}
      min={min}
      max={max}
      onChange={change}
    />
  );
}

export default Slider;
