import CsvRegionFormWrapper from "../components/CsvRegionFormWrapper";
import "../styles/EnterDetailsSection.css";
export default function EnterDetailsSection({ userCvData, setUserCvData, isHighlighted }) {
  return (
    <section className={`enter-details-section ${isHighlighted && "highlight"}`}>
      <div className="enter-details-top-wrapper">
        <button type="button">Clear CV</button>
        <button>Load Example</button>
      </div>
      {isHighlighted && <span>Click a box below to show entry fields</span>}
      <CsvRegionFormWrapper userCvData={userCvData} setUserCvData={setUserCvData} />
    </section>
  );
}
