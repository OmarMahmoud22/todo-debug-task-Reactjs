import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import AddTodo from "./pages/AddTodo";

function App() {
  return (
    <div className="d-flex min-vh-100">
      <Sidebar />
      <main className="flex-grow-1 p-4 bg-light">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />}>
            <Route path="add" element={<AddTodo />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}
export default App;
