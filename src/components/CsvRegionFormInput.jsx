import "../styles/CsvRegionFormInput.css";
import { useState } from "react";

export default function CsvRegionFormInput({
  inputLabelName,
  inputPlaceholder,
  userValue,
  userCvData,
  setUserCvData,
  userCvDataPropertyName,
  handleSetSubInputWrapperInputValues = "",
  subInputWrapperInputValue = null,
  dataCategory,
  dataCategoryArrayIndex,
  inputIndex,
  newDescriptionArray,
  showTrashIcon = false,
  handleSetActiveFormId,
}) {
  const [inputValue, setInputValue] = useState(userValue);
  const handleInputChange = (e) => {
    if (userCvDataPropertyName !== "descriptions") {
      handleSetSubInputWrapperInputValues ? handleSetSubInputWrapperInputValues((prev) => ({ ...prev, [userCvDataPropertyName]: e.target.value })) : setInputValue(e.target.value);
    } else {
      let newDescriptionArrayCopy = [...newDescriptionArray];
      newDescriptionArray[inputDescriptionIndex].description = e.target.value;

      handleSetSubInputWrapperInputValues ? handleSetSubInputWrapperInputValues((prev) => ({ ...prev, ["descriptions"]: newDescriptionArrayCopy })) : setInputValue(e.target.value);
    }
  };

  function deleteDataCategoryEntry(currentDataCategory, currentUserCvData) {
    let newdDataCategoryArray = [...currentUserCvData[currentDataCategory]];
    if (dataCategory === "workExperience" || dataCategory === "education") {
      newdDataCategoryArray[dataCategoryArrayIndex]["descriptions"].splice(inputIndex, 1);
    } else {
      newdDataCategoryArray.splice(inputIndex, 1);
      if (newdDataCategoryArray.length === 0) handleSetActiveFormId("");
    }
    setUserCvData((prev) => ({ ...prev, [currentDataCategory]: newdDataCategoryArray }));
  }

  return (
    <label htmlFor="" className={userCvDataPropertyName}>
      {inputLabelName}
      <div>
        <input
          name={userCvDataPropertyName}
          type="text"
          placeholder={inputPlaceholder}
          value={subInputWrapperInputValue !== null ? subInputWrapperInputValue : inputValue}
          onChange={handleInputChange}
        />
        {showTrashIcon && (
          <button type="button" onClick={() => deleteDataCategoryEntry(dataCategory, userCvData)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        )}
      </div>
    </label>
  );
}
