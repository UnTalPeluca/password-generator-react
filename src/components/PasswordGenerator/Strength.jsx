const Strength = ({ value }) => {
  const levels = [
    { message: "Too Weak!", classes: "bg-red border-red" },
    { message: "Weak", classes: "bg-orange border-orange" },
    { message: "Medium", classes: "bg-yellow border-yellow" },
    { message: "Strong", classes: "bg-neon-green border-neon-green" },
  ];
  const StrengthBars = () => (
    <div className="flex items-center gap-1">
      {levels.map((level, index) => (
        <div
          key={index}
          className={
            "border w-2 h-full " +
            (index <= value ? levels[value]?.classes : "")
          }
        />
      ))}
    </div>
  );
  return (
    <div
      className="flex justify-between items-center uppercase bg-very-dark-grey px-4 py-3
    sm:px-8 sm:py-5"
    >
      <p className="text-grey sm:text-lg">strength</p>
      <div className="flex gap-2">
        <p className="text-lg sm:text-2xl">
          {levels[value]?.message || "Select at least 1"}
        </p>
        {value === -1 ? null : <StrengthBars />}
      </div>
    </div>
  );
};

export default Strength;
