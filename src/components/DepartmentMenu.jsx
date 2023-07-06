import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

/**
 * Generates dropdown menu for department selection
 * @returns dropdown menu
 */

export default function DepartmentMenu(){

    const departments = [
      {
        label: "Sales",
        value: "Sales"
      },
      {
        label: "Marketing",
        value: "Marketing"
      },
      {
        label: "Engineering",
        value: "Engineering"
      },
      {
        label: "Human Resources",
        value: "Human Resources"
      },
      {
        label: "Legal",
        value: "Legal"
      },
    ];
    const defaultOption = departments[0];

  return(
    <>
      <label htmlFor="state">Department</label>
      <Dropdown className='department' options={departments} value={defaultOption} placeholder="Select an option" />
    </>
  );
}