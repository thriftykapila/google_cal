import { useNavigate } from "react-router-dom";
import "./welcome.css";

export const Welcome = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="main">
        <div>Hello Human,</div>
        <div>
          <strong>Fun Fact - </strong>If you are reading this, You are alive.
          Have fun and live to the fullest.
        </div>
        <div className="navigate">
          <div>
            <span>Navigate to </span>
            <button className="project" onClick={() => navigate("/projects")}>
              Projects
            </button>
            <span> or </span>
            <button className="project" onClick={() => navigate("/learn")}>
              Learn
            </button>
          </div>
        </div>
        <div>All Copyrights reserved &copy; {new Date().getFullYear()}</div>
        <div>
          Made with{" "}
          <span style={{ color: "red", fontSize: "18px" }}>&hearts;</span> by{" "}
          <strong>Thrifty Kapila</strong>
        </div>
      </div>
    </>
  );
};
