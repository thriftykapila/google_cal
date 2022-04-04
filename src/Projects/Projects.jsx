import { useNavigate } from "react-router-dom";
import "./projects.css";
export const Projects = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="main">
        <div>List of projects</div>
        <div className="flex">
          <button>
            <span
              className="material-icons-outlined cursor-pointer text-gray-600 mx-2"
              onClick={() => navigate("/")}
            >
              chevron_left
            </span>
          </button>
          <button className="cal" onClick={() => navigate("/projects/cal")}>
            Google Calendar
          </button>
        </div>
      </div>
    </>
  );
};
