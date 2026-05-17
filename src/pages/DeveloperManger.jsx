import FormData from '../components/Formdata/FormData'

export default function Developers() {

  const developerHeaders = [
    "Developer",
    "Technology",
    "Experience",
  ];

  const developerData = [
    {
      developer: "Omar",
      technology: "React",
      experience: "2 Years",
    },
    {
      developer: "Ali",
      technology: "Node.js",
      experience: "3 Years",
    },
  ];

  return (
    <>
      <FormData
        title="Developers"
        headers={developerHeaders}
        data={developerData}
      />
    </>
  );
}