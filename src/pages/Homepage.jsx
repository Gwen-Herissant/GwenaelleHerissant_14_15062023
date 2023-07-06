import { Link } from "react-router-dom";
import "../App.css";
import BirthDate from "../components/BirthDate";
import StartDate from "../components/StartDate";
import StatesMenu from "../components/StatesMenu";
import DepartmentMenu from "../components/DepartmentMenu";
import { useDispatch } from "react-redux";
import { registerFormValues } from "../features/employeeRegistration";
import { BasicModal } from "basic-react-modal-component";
import Input from "../components/Input";
import { useState } from "react";


/**
 * Generates homepage with general layout
 * @returns layout of the page
 */

export default function Homepage(){

  // State for controlling the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  //States for controlling the Input's Error visibility
  const [inputErrorStates, setInputErrorStates] = useState({
    firstName: false,
    lastName: false,
    dateOfBirth: false,
    startDate: false,
    department: false,
    street: false,
    city: false,
    zipCode: false
  });

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();

  //Displays error if input is empty
  const inputVerification = () => {
    let inputs = document.getElementsByTagName('input');
    let newErrorStates = { ...inputErrorStates };
    for(let input of inputs) {      
      if(input.value === '') {
        newErrorStates[input.id] = true;
      } else {
        newErrorStates[input.id] = false;
      }
    }

    setInputErrorStates(newErrorStates);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateOfBirth = document.getElementById('birth-date');
    const startDate = document.getElementById('start-date');
    const department = document.querySelector('.department');
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const state = document.querySelector('.state');
    const zipCode = document.getElementById('zip-code');

    // Check if any input is empty
    if (
      firstName.value === '' ||
      lastName.value === '' ||
      dateOfBirth.value === '' ||
      startDate.value === '' ||
      department.value === '' ||
      street.value === '' ||
      city.value === '' ||
      state.innerText === '' ||
      zipCode.value === ''
    ) {
      inputVerification();
      return;
    }

    const formValues = [{
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: startDate.value,
      department: department.innerText,
      street: street.value,
      city: city.value,
      state: state.innerText,
      zipCode: zipCode.value
    }]

    //dispatch values to redux store
    dispatch(registerFormValues(formValues));

    //open modal once the values have been dispatched
    openModal();
  }

  return(
    <div>
      <h1 className="title">Homepage</h1>
      <div className="container">
        <Link to={`/employee-list`}>View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <Input htmlFor='first-name' label='First Name' type='text' id='first-name' isActive={inputErrorStates['first-name']} />

          <Input htmlFor='last-name' label='Last Name' type='text' id='last-name' isActive={inputErrorStates['last-name']} />

          <BirthDate isActive={inputErrorStates['birth-date']} />

          <StartDate isActive={inputErrorStates['start-name']} />

          <fieldset className="address">
            <legend>Address</legend>

            <Input htmlFor='stree' label='Street' type='text' id='street' isActive={inputErrorStates['street']} />

            <Input htmlFor='city' label='City' type='text' id='city' isActive={inputErrorStates['city']} />

            <StatesMenu />

            <Input htmlFor='zip-code' label='Zip Code' type='number' id='zip-code' isActive={inputErrorStates['zip-code']} />
          </fieldset>

          <DepartmentMenu />

        </form>
        <button type="submit" onClick={handleSubmit}>Save</button>
        <BasicModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          textContent="Employee Created!"
        />
      </div>
    </div>
  );
}