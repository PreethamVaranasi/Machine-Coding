import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function DebouncedInput() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 1000, () => {
    console.log("API call can be done here");
  });
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <p>{inputValue}</p>
      <p>{debouncedValue}</p>
      <input
        type="text"
        placeholder="Search something"
        value={inputValue}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default DebouncedInput;
