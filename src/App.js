import Expence from "./Components/Expences/Expence";
import React, { useState } from "react";
import NewExpence from "./Components/NewExpence/NewExpence";

const DUMMY_EXPENCES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expences, setExpences] = useState(DUMMY_EXPENCES);

  const addExpenceHandler = (expence) => {
    setExpences((previousState) => {
      return [expence, ...previousState];
    });
  };
  return (
    <div>
      <NewExpence onAddExpence={addExpenceHandler} />
      <Expence item={expences} />
    </div>
  );
}

export default App;
