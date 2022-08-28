import { useState } from "react";
import Slider from "../Form/Slider";
import Result from "./Result";
import Checkbox from "../Form/Checkbox";
import Strength from "./Strength";
import GenerateBtn from "../Buttons/Generate";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [strength, setStrenght] = useState(1);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const generatePassword = (e) => {
    e.preventDefault();
    let chars = "";
    let newPassword = "";
    if (lowercase) {
      chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers) {
      chars += "0123456789";
    }
    if (symbols) {
      chars += "!@#$%^&*()";
    }
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      newPassword += chars.substring(randomNumber, randomNumber + 1);
    }
    setPassword(newPassword);
  };
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <Result value={password} />
      <form
        onSubmit={generatePassword}
        className="bg-dark-grey p-4 flex flex-col gap-6 sm:p-8 sm:gap-8"
      >
        <div>
          {/* Start Password Length */}
          <div className="text-almost-white">
            <div className="flex justify-between font-bold items-center pb-2 sm:pb-6">
              <p className="sm:text-lg">Character Length</p>
              <p className="text-2xl text-neon-green sm:text-3xl">
                {Math.floor(length)}
              </p>
            </div>
            <Slider
              min="0"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          {/* End Password Length */}
        </div>
        <div className="flex flex-col gap-4">
          <Checkbox
            label="Include Uppercase Letters"
            name="uppercase"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          />
          <Checkbox
            label="Include Lowercase Letters"
            name="lowercase"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
          />
          <Checkbox
            label="Include Numbers"
            name="numbers"
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
          />
          <Checkbox
            label="Include Symbols"
            name="symbols"
            checked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}
          />
        </div>
        <div className="flex flex-col gap-4 sm:gap-8">
          <Strength value={strength} />
          <GenerateBtn>GENERATE</GenerateBtn>
        </div>
      </form>
    </div>
  );
};

export default PasswordGenerator;
