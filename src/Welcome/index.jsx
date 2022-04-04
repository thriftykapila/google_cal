import "./index.css";
export const Welcome = () => {
  return (
    <>
      <div className="main">
        <div>Hello Human,</div>
        <div>
          <strong>Fun Fact - </strong>If you are reading this, You are alive.
          Have fun and live to the fullest.
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
