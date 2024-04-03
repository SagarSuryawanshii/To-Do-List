function AddToDo() {
  return (
    <div className="container items-container">
      <div className="row toDoRows">
        <div className="col-6">
          <input placeholder="Enter To Do Here" type="text" />
        </div>
        <div className="col-4">
          <input type="date" />{" "}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-primary todo-buttons">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
