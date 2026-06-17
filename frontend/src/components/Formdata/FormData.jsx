import { Link } from "react-router-dom"

export default function FormData({
  title,
  headers,
  data,
}) {
  return (
    <>
      <h2 className="mb-4">{title}</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, index) => (
                <td key={index}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Link
        to="add"
        className="btn btn-primary"
      >
        Add {title}
      </Link>
    </>
  );
}