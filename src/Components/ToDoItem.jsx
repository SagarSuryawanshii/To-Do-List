function ToDoItem({ toDoDate, toDoName, onDeleteButtonClick }) {
  return (
    <>
      <div className="container">
        <div className="row toDoRows">
          <div className="col-6">{toDoName}</div>
          <div className="col-4">{toDoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger todo-buttons"
              onClick= {() => onDeleteButtonClick(toDoName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoItem;
