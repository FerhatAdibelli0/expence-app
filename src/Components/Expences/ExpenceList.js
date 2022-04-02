import React from "react";
import ExpenceItem from "./ExpenceItem";
import "./ExpenceList.css";

const ExpenceList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expence.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expence) => (
        <ExpenceItem
          title={expence.title}
          amount={expence.amount}
          date={expence.date}
          key={expence.id}
        />
      ))}
    </ul>
  );
};

export default ExpenceList;
