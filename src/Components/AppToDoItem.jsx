function AppToDoItem() {
  return (
    <div class="container">
      <div class="row toDoRows">
        <div class="col-6">Milk</div>
        <div class="col-4">02-04-2024</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger todo-buttons">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppToDoItem;
