/**
 * Generates reusable input component for form
 * @param {string} htmlFor corresponding input 
 * @param {string} type of input 
 * @param {string} id of html element 
 * @param {string} label title
 * @param {boolean} isActive state for error 
 * @returns input
 */

export default function Input({htmlFor, type, id, label, isActive}){
  return(
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} id={id} />
      {isActive && (
        <p className="input-error">Please complete this field.</p>
      )}
    </>
  );
}