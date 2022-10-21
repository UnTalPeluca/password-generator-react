import { useState, useEffect } from "react";
import Slider from "../Form/Slider";
import Result from "./Result";
import Checkbox from "../Form/Checkbox";
import Strength from "./Strength";
import PrimaryBtn from "../Buttons/Primary";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(10);
  const [strength, setStrenght] = useState(0);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const chars = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()",
  };
  let charsAvailables = "";
  const generatePassword = (e) => {
    e.preventDefault();
    let newPassword = "";
    const getRandomChar = (string) => {
      let randomNumber = Math.floor(Math.random() * string.length);
      return string.substring(randomNumber, randomNumber + 1);
    };
    if (uppercase) {
      charsAvailables += chars.uppercase;
      newPassword += getRandomChar(chars.uppercase);
    }
    if (lowercase) {
      charsAvailables += chars.lowercase;
      newPassword += getRandomChar(chars.lowercase);
    }
    if (numbers) {
      charsAvailables += chars.numbers;
      newPassword += getRandomChar(chars.numbers);
    }
    if (symbols) {
      charsAvailables += chars.symbols;
      newPassword += getRandomChar(chars.symbols);
    }
    let loopLength = Math.floor(passwordLength) - newPassword.length;
    for (let i = 0; i < loopLength; i++) {
      newPassword += getRandomChar(charsAvailables);
    }
    setPassword(newPassword);
  };
  useEffect(() => {
    /* Checking the password strength. */
    let newStrength = -1;
    if (uppercase) {
      newStrength += 1;
    }
    if (lowercase) {
      newStrength += 1;
    }
    if (numbers) {
      newStrength += 1;
    }
    if (symbols) {
      newStrength += 1;
    }
    setStrenght(newStrength);
  }, [uppercase, lowercase, numbers, symbols]);
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
                {Math.floor(passwordLength)}
              </p>
            </div>
            <Slider
              min="10"
              max="20"
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
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
          <PrimaryBtn>GENERATE</PrimaryBtn>
        </div>
      </form>
    </div>
  );
};

export default PasswordGenerator;
