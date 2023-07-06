import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr);
setDefaultLocale('fr');

/**
 * Generates date-picker for user's birthdate
 * @param {prop} isActive state for error 
 * @returns date-picker
 */

export default function BirthDate({isActive}){

  const [startDate, setStartDate] = useState(new Date());

  return(
    <>
      <label htmlFor="date-of-birth">Date of Birth</label>
      <DatePicker id="birth-date" selected={startDate} onChange={(date) => setStartDate(date)} locale="fr" dateFormat="dd/MM/yyyy" />
      {isActive && (
        <p className="input-error">Please complete this field.</p>
      )}
    </>
  );
}