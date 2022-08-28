function GenerateBtn({ children }) {
  return (
    <button className="bg-neon-green p-4 text-dark-grey font-bold w-full border border-neon-green hover:bg-transparent hover:text-neon-green fill-dark-grey hover:fill-neon-green sm:text-lg ">
      {children}
        <svg className="inline ml-4 mb-1" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          />
        </svg>
    </button>
  );
}

export default GenerateBtn;
