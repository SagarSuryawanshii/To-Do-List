import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

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

  const handleDeletedItem = (todoItemName) => {
    const newToDoItems = todoListItems.filter(item => item.itemName != todoItemName);

    setTodoListItems(newToDoItems);
    // console.log(`Item Deleted: ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />

      {todoListItems.length == 0 && <WelcomeMessage></WelcomeMessage>}
      <ToDoItems
        toDoListItems={todoListItems}
        onDeleteItem={handleDeletedItem}
      ></ToDoItems>
    </center>
  );
}

export default App;
