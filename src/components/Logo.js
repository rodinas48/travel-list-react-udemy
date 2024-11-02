import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Logo() {
  return (
    <h1 className="logo">
      <FontAwesomeIcon icon={faSuitcaseRolling} className="icon" /> Far Away
      <span className="icon"> ✈</span>
    </h1>
  );
}
