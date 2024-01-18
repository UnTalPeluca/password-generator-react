import copyImg from "../../assets/images/icon-copy.svg";
import { useState } from "react";
const Result = ({ value }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    if (value.trim()) {
      navigator.clipboard.writeText(value);
      setCopied(true);
      if (!copied) {
        setTimeout(() => {
          setCopied(false);
        }, 2500);
      }
    }
  };
  return (
    <div
      onClick={(e) => copyToClipboard()}
      className="relative bg-dark-grey p-4 cursor-pointer sm:py-5 sm:px-8"
    >
      <label>
        <input
          className="w-full bg-transparent box-border cursor-pointer text-2xl placeholder:text-almost-white/25 sm:text-3xl focus:outline-none"
          placeholder="P4$5W0rD!"
          type="text"
          value={value}
          readOnly
        />
      </label>
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neon-green font-bold
    sm:right-8"
      >
        <span className={copied ? "inline" : "hidden"}>COPIED</span>
        <img className="inline pl-4 h-5 sm:h-6" src={copyImg} alt="" />
      </div>
    </div>
  );
};

export default Result;
