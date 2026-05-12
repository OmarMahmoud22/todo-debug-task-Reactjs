import { useNavigate } from "react-router-dom";
const AddTodo = () => {
  const navigate = useNavigate();
  return (
    <div className="card border-0 shadow rounded-4 p-3 animate__animated animate__fadeInRight">
      <div className="card-body">
        <h5 className="fw-bold mb-4">Create New Task</h5>
        <div className="mb-3">
          <label className="form-label text-muted small">Task Title</label>
          <input
            type="text"
            className="form-control form-control-lg bg-light border-0"
            placeholder="e.g. Study React Router"
          />
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary btn-lg rounded-3"
            onClick={() => navigate("/todos")}
          >
            Add Task
          </button>
          <button
            className="btn btn-link text-muted"
            onClick={() => navigate("/todos")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddTodo;
