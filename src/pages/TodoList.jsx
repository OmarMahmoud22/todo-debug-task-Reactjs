import { Link, Outlet } from "react-router-dom";
import TodoItem from "../components/TodoItem";

const TodoList = () => {
  const myTasks = [
    { id: 1, text: "Finalize React Syllabus", status: "Pending" },
    { id: 2, text: "Code Debugging Session", status: "Done" },
  ];

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark">My Todo List</h2>
        <Link to="add" className="btn btn-primary px-4 rounded-pill">
          <i className="fa-solid fa-plus me-2"></i>New Task
        </Link>
      </div>
      <div className="row">
        <div className="col-md-7">
          <div className="list-group shadow-sm border-0">
            {myTasks.map((t, index) => (
              <TodoItem key={index} task={t} />
            ))}
          </div>
        </div>
        <div className="col-md-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default TodoList;
