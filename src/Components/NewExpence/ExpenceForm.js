import React, { useState } from "react";
import "./ExpenceForm.css";

const ExpenceForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
  };

  // setUserInput({
  //   ...userInput,
  //   enteredTitle: event.target.value,
  // });

  // setUserInput((prevState) => {
  //   return { ...prevState, enteredTitle: event.target.value };
  //   });
  // };

  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    const expenceData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    setenteredTitle("");
    setenteredDate("");
    setenteredAmount("");

    props.onSaveExpenceData(expenceData);
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={enteredAmount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2021-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expence</button>
        <button type="button" onClick={props.onStop}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenceForm;
