function  ToDoItem({toDoDate, toDoName}) {
  return (
    <>
      <div className="container">
        <div className="row toDoRows">
          <div className="col-6">{toDoName}</div>
          <div className="col-4">{toDoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger todo-buttons">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoItem;
