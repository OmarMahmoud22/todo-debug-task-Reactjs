import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";
function Dashboard() {
  return (
    <>
      <Navbar adminName="mohamed" />
      <main className="d-flex">
      <Sidebar />
      <h1 className="flex-grow-1">Test Dashboard</h1>
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
