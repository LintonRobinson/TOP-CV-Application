import "../styles/CsvRegionFormInput.css";
import { useState } from "react";

export default function CsvRegionFormInput({ inputLabelName, inputPlaceholder, userValue, userCvDataPropertyName, handleSetSubInputWrapperInputValues = "", subInputWrapperInputValue = null }) {
  const [inputValue, setInputValue] = useState(userValue);
  const handleInputChange = (e) => {
    console.log("e.target.value", e.target.value);
    handleSetSubInputWrapperInputValues ? handleSetSubInputWrapperInputValues((prev) => ({ ...prev, [userCvDataPropertyName]: e.target.value })) : setInputValue(e.target.value);
  };

  return (
    <label htmlFor="" className={userCvDataPropertyName}>
      {inputLabelName}
      <input
        name={userCvDataPropertyName}
        type="text"
        placeholder={inputPlaceholder}
        value={subInputWrapperInputValue !== null ? subInputWrapperInputValue : inputValue}
        onChange={handleInputChange}
      />
    </label>
  );
}
