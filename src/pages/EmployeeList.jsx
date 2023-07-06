import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";
import { selectFormData } from "../utils/selectors";
import MUIDataTable from "mui-datatables";

/**
 * Generates employee-list page with general layout and data-table
 * @returns layout of the page
 */

export default function EmployeeList(){

  const columns = [
    {
      name: "firstName",
      label: "First Name",
    },
    {
      name: "lastName",
      label: "Last Name",
    },
    {
      name: "startDate",
      label: "Start Date",
    },
    {
      name: "department",
      label: "Department",
    },
    {
      name: "dateOfBirth",
      label: "Date of Birth",
    },
    {
      name: "street",
      label: "Street",
    },
    {
      name: "city",
      label: "City",
    },
    {
      name: "state",
      label: "State",
    },
    {
      name: "zipCode",
      label: "Zip Code",
    },
  ]

  const options = {
    selectableRows: 'none',
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
  };

  const data = useSelector(selectFormData);

  const tableData = data.flatMap((submission) => Object.values(submission));

  return(
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      {data.length > 0 ? (
        <MUIDataTable
          title={"Employee List"}
          data={tableData}
          columns={columns}
          options={options}
        />
      ) : (
        <p>No data available.</p>
      )}
      <Link to={`/`}>Home</Link>
    </div>
  );
}