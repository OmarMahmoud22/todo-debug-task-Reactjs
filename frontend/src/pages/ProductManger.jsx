import FormData from '../components/Formdata/FormData'

export default function Projects() {

  const projectHeaders = [
    "Project Name",
    "Status",
    "Team",
  ];

  const projectData = [
    {
      project: "E-commerce",
      status: "Active",
      team: "Frontend",
    },
    {
      project: "Dashboard",
      status: "Pending",
      team: "Backend",
    },
  ];

  return (
    <>
      <FormData
        title="Projects"
        headers={projectHeaders}
        data={projectData}
      />
    </>
  );
}