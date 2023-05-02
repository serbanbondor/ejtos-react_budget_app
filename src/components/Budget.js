import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);

  const handleBugdet = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
  };

  const handleNumbersOnlyInput = (event) => {
    if (!/[0-9]/.test(event.key) && event.key !== "Backspace") {
      event.preventDefault();
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: £</span>
      <input
        required="required"
        type="number"
        step="10"
        id="budget"
        value={budget}
        style={{ marginLeft: "2rem", size: 10 }}
        onChange={(event) => handleBugdet(event.target.value)}
        onKeyDown={handleNumbersOnlyInput}
      ></input>
    </div>
  );
};
export default Budget;
