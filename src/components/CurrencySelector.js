import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { dispatch } = useContext(AppContext);

  const handleCurrencyChange = (value) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: value,
    });
  };

  return (
    <div className="alert alert-secondary">
      <span>Currency</span>
      <select
        className="custom-select"
        id="inputCurrencySelect"
        onChange={(event) => handleCurrencyChange(event.target.value)}
      >
        <option value="$" name="dollar">
          $ Dollar
        </option>
        <option value="£" name="pound">
          £ Pounds
        </option>
        <option value="€" name="euro">
          € Euro
        </option>
        <option value="₹" name="ruppee">
          ₹ Ruppee
        </option>
      </select>
    </div>
  );
};

export default ExpenseList;
