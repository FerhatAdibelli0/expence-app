import React, { useState } from "react";
import "./NewExpence.css";
import ExpenceForm from "./ExpenceForm";

const NewExpence = (props) => {
  const [editingForm, setEditingForm] = useState(false);

  const startingEditing = () => {
    setEditingForm(true);
  };

  const stopEditing = () => {
    setEditingForm(false);
  };

  const ExpenceData = (enteredData) => {
    const expenceDate = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpence(expenceDate);
    setEditingForm(false);
  };

  return (
    <div className="new-expense">
      {editingForm === false && (
        <button onClick={startingEditing}>Add New Expence</button>
      )}
      {editingForm === true && (
        <ExpenceForm onSaveExpenceData={ExpenceData} onStop={stopEditing} />
      )}
    </div>
  );
};

export default NewExpence;
