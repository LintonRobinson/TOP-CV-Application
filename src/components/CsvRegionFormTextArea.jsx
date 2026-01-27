import "../styles/CsvRegionFormTextArea.css";
import { useState } from "react";

export default function CsvRegionFormTextArea({ textareaPlaceholder, userValue, userCvDataPropertyName }) {
  const [textareaValue, setTextareaValue] = useState(userValue);
  const handleInputChange = (e) => {
    setTextareaValue(e.target.value);
  };

  return (
    <label htmlFor="" className={userCvDataPropertyName}>
      <textarea name={userCvDataPropertyName} type="text" placeholder={textareaPlaceholder} value={textareaValue} onChange={handleInputChange} />
    </label>
  );
}
