import "../../assets/styles/form/checkbox/checkbox.css";

function Checkbox({ name, label, ...inputProps }) {
  return (
    <label
      htmlFor={name}
      className="cursor-pointer select-none gap-4 flex items-center sm:text-lg relative"
    >
      <input type="checkbox" id={name} {...inputProps} className="cursor-pointer"/>
      <span>{label}</span>
    </label>
  );
}

export default Checkbox;
