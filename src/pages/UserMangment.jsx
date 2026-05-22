
import FormData from "../components/Formdata/FormData";

export default function UserManagement() {
  const userHeaders = ["Name", "Email", "Role"];

  const userData = [
    {
      name: "Omar",
      email: "omar@gmail.com",
      role: "Admin",
    },
    {
      name: "Ahmed",
      email: "ahmed@gmail.com",
      role: "User",
    },
  ];

  return (
    <>
      <FormData title="Users" headers={userHeaders} data={userData} />
      
    </>
  );
}
