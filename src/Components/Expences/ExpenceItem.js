import React, { useState } from "react";
import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";

const ExpenceItem = (props) => {
  const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("changed");
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenceDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Click Here</button> */}
      </Card>
    </li>
  );
};

export default ExpenceItem;
