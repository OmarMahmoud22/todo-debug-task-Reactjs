const TodoItem = ({ task }) => {
  return (
    <div className="list-group-item d-flex justify-content-between align-items-center border-0 mb-2 rounded-3 shadow-sm py-3">
      <div className="d-flex align-items-center">
        <i
          className={`fa-solid ${task.status === "Done" ? "fa-circle-check text-success" : "fa-circle-dot text-warning"} me-3 fs-5`}
        ></i>
        <span
          className={
            task.status === "Done"
              ? "text-decoration-line-through text-muted"
              : "fw-medium"
          }
        >
          {task.text}
        </span>
      </div>
      <button className="btn btn-sm btn-outline-danger border-0">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};
export default TodoItem;
