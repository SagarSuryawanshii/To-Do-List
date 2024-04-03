import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

function ToDoItems({ toDoListItems }) {
  return (
    <div className={styles.itemsContainer}>
      {toDoListItems.map((item) => (
        <ToDoItem
          key={item.itemName}
          toDoDate={item.dueDate}
          toDoName={item.itemName}
        >
          {" "}
        </ToDoItem>
      ))}
    </div>
  );
}

export default ToDoItems;
