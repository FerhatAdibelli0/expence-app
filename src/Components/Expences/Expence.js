import React, { useState } from "react";
import "./Expence.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpencesFilter";
import ExpenceList from "./ExpenceList";
import ExpenceChart from "./ExpenceChart";

const Expence = (props) => {
  const [filterYear, setfilterYear] = useState("2020");

  const filteredYear = (selectedYear) => {
    setfilterYear(selectedYear);
  };
  const filtedItem = props.item.filter(
    (expence) => expence.date.getFullYear().toString() === filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter value={filterYear} filteredYear={filteredYear} />
        <ExpenceChart expences={filtedItem} />
        <ExpenceList item={filtedItem} />
      </Card>
    </div>
  );
};

export default Expence;
