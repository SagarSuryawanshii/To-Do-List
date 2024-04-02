import AppName from "./Components/AppName";
import AppToDo from "./Components/AppToDo";
import AppToDoItem from "./Components/AppToDoItem";
import AppToDoItem2 from "./Components/AppToDoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AppToDo />
      <div className="items-container">
        <AppToDoItem />
        <AppToDoItem2 />
      </div>
    </center>
  );
}

export default App;
