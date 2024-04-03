import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";
import "./App.css";

function App() {

  const Items = [
    {
      itemName : "Buy milk",
      dueDate : "02-04-2024"
    },
    {
      itemName : "Go to office",
      dueDate : "02-04-2024"
    },
    {
      itemName : "Go for a walk",
      dueDate : "02-04-2024"
    },
    {
      itemName : "Go for Study",
      dueDate : "02-04-2024"
    },
  ]

  return (
    <center className="todo-container">
      
      <AppName />
      <AddToDo />
     <ToDoItems toDoListItems={Items}></ToDoItems>
    </center>
  );
}

export default App;
