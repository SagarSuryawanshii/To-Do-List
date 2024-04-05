import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      itemName: "Buy milk",
      dueDate: "02-04-2024",
    },
    {
      itemName: "Go to office",
      dueDate: "02-04-2024",
    },
    {
      itemName: "Go for a walk",
      dueDate: "02-04-2024",
    },
    {
      itemName: "Go for Study",
      dueDate: "02-04-2024",
    },
  ];

  const [todoListItems, setTodoListItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added : ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoListItems,
      {
        itemName: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoListItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      <ToDoItems toDoListItems={todoListItems}></ToDoItems>
    </center>
  );
}

export default App;
