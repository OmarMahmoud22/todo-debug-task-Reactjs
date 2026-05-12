const Home = () => {
  const user_Name = "Ezz";

  return (
    <div className="container py-5">
      <div className="bg-white p-5 rounded-4 shadow-sm border-0">
        <h1 className="display-4 fw-bold text-dark">
          Welcome Back, {user_Name}! 👋
        </h1>
        <p className="lead text-muted">You have 3 tasks to complete today.</p>
        <hr className="my-4" />
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded-3 bg-light">
              <h5 className="text-primary">In Progress</h5>
              <h2 className="fw-bold">12</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded-3 bg-light">
              <h5 className="text-success">Completed</h5>
              <h2 className="fw-bold">45</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
