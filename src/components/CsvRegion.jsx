import "../styles/CsvRegion.css";
export default function CsvRegion({ children, className = "" }) {
  return <div className={`profile-wrapper bottom-section-wrapper ${className}`}>{children}</div>;
}
