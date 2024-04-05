import { useState } from "react";
import Styles from "./ToDoItems.module.css";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className={`container ${Styles.itemsContainer}`}>
      <div className="row toDoRows">
        <div className="col-6">
          <input
            placeholder="Enter To Do Here"
            type="text"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date"
          value={dueDate}
          onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-primary todo-buttons"
            onClick={handleAddButtonClick}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
