import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";

const App = () => {
  return (
    <div className="bg-very-dark-grey min-h-screen min-w-full text-almost-white flex place-items-center">
      <div className="text-center w-11/12 mx-auto max-w-xs sm:max-w-sm">
        <h1 className="text-grey font-bold pb-4 text-2xl">Password Generator</h1>
        <PasswordGenerator />
      </div>
    </div>
  );
};

export default App;
