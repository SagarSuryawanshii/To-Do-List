function AppToDo() {
  return (
    <div class="container items-container">
      <div class="row toDoRows">
        <div class="col-6">
          <input placeholder="Enter To Do Here" type="text" />
        </div>
        <div class="col-4">
          <input type="date" />{" "}
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-primary todo-buttons">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppToDo;
